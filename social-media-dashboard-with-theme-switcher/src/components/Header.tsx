export default function Header(props: { isDark: boolean; onClick: any }) {
  return (
    
      <div
        className={
          props.isDark
            ? "h-1/3 rounded-b-2xl bg-neutral-dark-200 py-4 px-40"
            : "h-1/3 rounded-b-2xl bg-neutral-light-200 py-4 px-40"
        }
      >
        <div className="flex justify-between items-center">
          <div className="flex flex-col font-bold">
            <h1
              className={
                props.isDark
                  ? "text-neutral-dark-500 text-3xl"
                  : "text-neutral-light-500 text-3xl"
              }
            >
              Social Media Dashboard
            </h1>
            <p
              className={
                props.isDark
                  ? "text-neutral-dark-400"
                  : "text-neutral-light-400"
              }
            >
              Total Followers:23,004
            </p>
          </div>
          <div className="flex gap-4">
            <p className="text-primary-600 font-bold">Dark Mode</p>
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <div
                  className={
                    props.isDark
                      ? "w-11 h-6 bg-gradient-to-r from-primary-700 to-primary-800 rounded-full shadow-inner"
                      : "w-11 h-6 bg-primary-600 rounded-full shadow-inner"
                  }
                ></div>
                <div
                  className={
                    props.isDark
                      ? "absolute w-4 h-4 bg-neutral-dark-100 rounded-full shadow transition-all inset-y-1 inset-x-1 duration-300"
                      : "absolute w-4 h-4 bg-neutral-light-100 rounded-full shadow transition-all inset-y-1 inset-x-6 duration-300"
                  }
                ></div>
                <input type="checkbox" hidden onClick={props.onClick} />
              </div>
            </label>
          </div>
        </div>
      </div>
  );
}
