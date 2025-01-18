function Header() {
  return (
    <>
      <div className="flex justify-center items-center p-4">
        <input
          type="text"
          className="w-full max-w-3xl p-2 focus:outline-none rounded-xl bg-slate-100 dark:bg-slate-950 bg-opacity-30 dark:bg-opacity-30 backdrop-filter backdrop-blur-sm text-white"
        />
      </div>
    </>
  );
}

export default Header;
