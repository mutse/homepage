export default function Content() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="grid grid-cols-1 gap-4 mt-8">
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://telegraph-image-3qp.pages.dev/file/3b1892584fe2e994c060a.png"
            alt="office content 1"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 mt-8">
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://telegraph-image-3qp.pages.dev/file/fd947fab9877f21cf5052.png"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
}
