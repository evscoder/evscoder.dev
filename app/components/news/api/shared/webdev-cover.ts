import { Parser } from 'htmlparser2';

function resolveCoverUrl(value: string, articleUrl: string): string | null {
  try {
    const url = new URL(value, articleUrl);
    const allowedHost =
      url.hostname === 'web.dev' ||
      (url.hostname === 'storage.googleapis.com' && url.pathname.startsWith('/web-dev-assets/'));

    if (url.protocol !== 'https:' || !allowedHost || url.username || url.password || url.port) {
      return null;
    }

    return url.href;
  } catch {
    return null;
  }
}

export async function getWebdevCover(articleUrl: string): Promise<string | null> {
  try {
    const response = await fetch(articleUrl, {
      next: { revalidate: 86400 },
      signal: AbortSignal.timeout(5000),
      redirect: 'error',
    });

    if (!response.ok) {
      return null;
    }

    let openGraphImage: string | null = null;
    let twitterImage: string | null = null;
    const parser = new Parser({
      onopentag(name, attributes) {
        if (name !== 'meta') {
          return;
        }

        const property = (attributes.property ?? attributes.name ?? '').toLowerCase();
        const content = attributes.content?.trim();

        if (!content) {
          return;
        }

        if (property === 'og:image' && !openGraphImage) {
          openGraphImage = resolveCoverUrl(content, articleUrl);
        }

        if (property === 'twitter:image' && !twitterImage) {
          twitterImage = resolveCoverUrl(content, articleUrl);
        }
      },
      onclosetag(name) {
        if (name === 'head') {
          parser.pause();
        }
      },
    });

    parser.end(await response.text());
    return openGraphImage ?? twitterImage;
  } catch {
    // A missing cover must not prevent the news item from appearing.
    return null;
  }
}
