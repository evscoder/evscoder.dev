import type { SupportedLanguage } from '@/app/components/home/model/site-content';
import type { ProjectCaseStudy } from '../project-types';

export const imageConverterCaseStudy: Record<SupportedLanguage, ProjectCaseStudy> = {
  ru: {
    eyebrow: 'DESKTOP APP / UBUNTU + WINDOWS',
    description:
      'Desktop-приложение для Ubuntu и Windows: пакетная оптимизация изображений, предпросмотр сжатия и сохранение файлов на компьютере.',
    seoTitle: 'Image Converter — desktop-приложение для Ubuntu и Windows | EVS.CODER',
    imageAlt: 'Оригинал и результат сжатия в WebP, прогноз размера для трёх файлов',
    sections: [
      {
        id: 'task',
        label: 'Задача',
        eyebrow: '01 / CONTEXT',
        title: 'Подготовка изображений на компьютере',
        blocks: [
          {
            type: 'paragraph',
            text: 'При подготовке нескольких изображений нужно выбрать формат, подобрать качество, ограничить размеры и последовательно назвать файлы. Приложение объединяет эти действия в одном интерфейсе и показывает, как настройки влияют на результат.',
          },
          {
            type: 'paragraph',
            text: 'Приложение построено на Tauri 2: React отвечает за интерфейс, Rust — за нативную обработку WebP и PNG, а плагины Tauri — за системные диалоги и запись файлов. Изображения обрабатываются локально, без отправки на сервер. Дополнительно доступен браузерный режим; текущие скриншоты сняты в нём.',
          },
        ],
      },
      {
        id: 'platforms',
        label: 'Операционные системы',
        eyebrow: '02 / PLATFORMS',
        title: 'Ubuntu и Windows',
        blocks: [
          {
            type: 'paragraph',
            text: 'В проекте настроена сборка desktop-приложения для двух операционных систем. Интерфейс и логика обработки общие, а установщики собираются под каждую платформу отдельно.',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              {
                title: 'Ubuntu.',
                text: 'Пакет .deb для установки и AppImage для запуска приложения.',
              },
              {
                title: 'Windows.',
                text: 'Установщик .exe через NSIS и пакет .msi.',
              },
            ],
          },
        ],
      },
      {
        id: 'workflow',
        label: 'Сценарий работы',
        eyebrow: '03 / INTERFACE',
        title: 'От загрузки до файлов в выбранной папке',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              {
                title: 'Загрузить изображения.',
                text: 'Добавить файлы через выбор или перетаскивание, посмотреть миниатюры и выбрать изображение для сравнения.',
              },
              {
                title: 'Подобрать настройки.',
                text: 'Выбрать WebP, JPEG или PNG, качество и максимальную ширину. Для PNG настройка качества отключена.',
              },
              {
                title: 'Оценить результат.',
                text: 'Сравнить оригинал и обработанный файл. Прогноз показывает размер всех файлов и экономию либо увеличение объёма.',
              },
              {
                title: 'Сохранить файлы.',
                text: 'Выбрать папку системным диалогом, запустить обработку и записать файлы на компьютер. Для переноса результатов доступен ZIP.',
              },
            ],
          },
          {
            type: 'image',
            image: {
              src: '/images/projects/image-converter/workspace.png',
              alt: 'Загруженные изображения, сравнение и настройки пакетной обработки',
              width: 1440,
              height: 1790,
            },
            caption: 'Рабочий экран: файлы, предпросмотр и параметры конвертации.',
          },
        ],
      },
      {
        id: 'decisions',
        label: 'Технические решения',
        eyebrow: '04 / ENGINEERING',
        title: 'Что стоит за интерфейсом',
        blocks: [
          {
            type: 'decisions',
            items: [
              {
                title: 'React-интерфейс и нативная обработка на Rust',
                text: 'Tauri связывает React-интерфейс с Rust: WebP и PNG передаются в нативный обработчик бинарным IPC-запросом. Обработка вынесена в spawn_blocking, изменение размера сохраняет пропорции. JPEG в текущем frontend-пути использует Canvas; Canvas также обеспечивает дополнительный браузерный режим.',
              },
              {
                title: 'Несколько способов сохранить результат',
                text: 'Системный диалог Tauri позволяет выбрать папку, а плагин файловой системы записывает обработанные изображения на диск. Результаты получают базовое имя и последовательную нумерацию. ZIP-архив сохраняется через системный диалог; в браузерном режиме предусмотрено скачивание архива.',
              },
              {
                title: 'Один результат для трёх сценариев',
                text: 'Предпросмотр, прогноз общего размера и итоговая конвертация используют общий кеш обещаний обработки. Ключ включает файл, формат, качество и максимальную ширину. Повторный запрос с теми же параметрами переиспользует вычисление, а ошибка удаляет запись из кеша.',
              },
              {
                title: 'Ограниченная параллельность',
                text: 'Загрузка миниатюр и конвертация выполняются с двумя параллельными задачами, прогноз — с одной. Такой подход ограничивает число одновременно декодируемых изображений. Предпросмотр запускается с задержкой 200 мс, прогноз — 600 мс; устаревшие результаты не обновляют интерфейс.',
              },
            ],
          },
        ],
      },
    ],
  },
  en: {
    eyebrow: 'DESKTOP APP / UBUNTU + WINDOWS',
    description:
      'A desktop application for Ubuntu and Windows: batch image optimization, compression previews, and local file export.',
    seoTitle: 'Image Converter — desktop application for Ubuntu and Windows | EVS.CODER',
    imageAlt: 'Original and WebP compression result, with a size estimate for three files',
    sections: [
      {
        id: 'task',
        label: 'Task',
        eyebrow: '01 / CONTEXT',
        title: 'Preparing images on your computer',
        blocks: [
          {
            type: 'paragraph',
            text: 'Preparing a batch of images means choosing a format, adjusting quality, limiting dimensions, and naming files in sequence. The application brings these steps into one interface and shows how each setting affects the result.',
          },
          {
            type: 'paragraph',
            text: 'Built with Tauri 2, the application uses React for the interface, Rust for native WebP and PNG processing, and Tauri plugins for system dialogs and file writes. Images are processed locally without being sent to a server. An additional browser mode is available; the current screenshots were taken in that mode.',
          },
        ],
      },
      {
        id: 'platforms',
        label: 'Operating systems',
        eyebrow: '02 / PLATFORMS',
        title: 'Ubuntu and Windows',
        blocks: [
          {
            type: 'paragraph',
            text: 'The project is configured to build a desktop application for two operating systems. Both share the interface and processing logic, while installers are built separately for each platform.',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              {
                title: 'Ubuntu.',
                text: 'A .deb package for installation and an AppImage for running the application.',
              },
              {
                title: 'Windows.',
                text: 'An .exe installer built with NSIS and an .msi package.',
              },
            ],
          },
        ],
      },
      {
        id: 'workflow',
        label: 'Workflow',
        eyebrow: '03 / INTERFACE',
        title: 'From upload to files in your chosen folder',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              {
                title: 'Load images.',
                text: 'Add files through the file picker or drag and drop, view thumbnails, and choose an image to compare.',
              },
              {
                title: 'Adjust settings.',
                text: 'Select WebP, JPEG, or PNG, set the quality and maximum width. Quality controls are disabled for PNG.',
              },
              {
                title: 'Evaluate the result.',
                text: 'Compare the original with the processed image. The estimate shows the total size of all files and any size reduction or increase.',
              },
              {
                title: 'Save files.',
                text: 'Choose a folder through the system dialog, start processing, and save files on your computer. ZIP export is also available for transferring the results.',
              },
            ],
          },
          {
            type: 'image',
            image: {
              src: '/images/projects/image-converter/workspace.png',
              alt: 'Uploaded images, comparison preview, and batch processing settings',
              width: 1440,
              height: 1790,
            },
            caption: 'Workspace: files, preview, and conversion settings.',
          },
        ],
      },
      {
        id: 'decisions',
        label: 'Technical decisions',
        eyebrow: '04 / ENGINEERING',
        title: 'The engineering behind the interface',
        blocks: [
          {
            type: 'decisions',
            items: [
              {
                title: 'React interface and native Rust processing',
                text: 'Tauri connects the React interface to Rust: WebP and PNG data are sent to the native handler through a binary IPC request. Processing runs in spawn_blocking, and resizing preserves aspect ratio. The current frontend path uses Canvas for JPEG; Canvas also supports the additional browser mode.',
              },
              {
                title: 'Multiple ways to save results',
                text: 'The Tauri system dialog lets users choose a folder, and the filesystem plugin writes processed images to disk. Results receive a base name and sequential numbering. ZIP archives are saved through the system dialog; browser mode supports downloading the archive.',
              },
              {
                title: 'One result for three workflows',
                text: 'Preview, total size estimates, and final conversion share a cache of processing promises. The key includes the file, format, quality, and maximum width. Requests with the same parameters reuse the computation, while errors remove the cache entry.',
              },
              {
                title: 'Limited concurrency',
                text: 'Thumbnail loading and conversion run with two concurrent tasks, while size estimation uses one. This limits the number of images decoded at the same time. Preview starts after a 200 ms delay and estimation after 600 ms; stale results do not update the interface.',
              },
            ],
          },
        ],
      },
    ],
  },
};
