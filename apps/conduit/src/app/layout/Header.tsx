export const Header = () => {
  return <header className="h-[50px] mx-52 py-4">
    <div className="flex flex-row justify-between">
      <div className="flex flex-row ">
        <span className="select-none">Conduit</span>
      </div>
      <div className="flex flex-row gap-4">
        <span>Home</span>
        <span>Login</span>
        <span>Sign Up</span>
      </div>
    </div>
  </header>;
};
