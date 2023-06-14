export default function ErrorModal() {
  return (
    <>
      <div className="fixed inset-0 bg-slate-900 bg-opacity-25"></div>
      <div className="fixed top-1/2 left-1/2 w-full max-w-4xl min-h-[20rem] rounded-2xl p-4 bg-white text-slate-800 -translate-x-1/2 -translate-y-1/2">
        <span>Hello modal</span>
      </div>
    </>
  );
}
