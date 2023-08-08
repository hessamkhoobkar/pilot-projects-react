export default function Header() {
  return (
    <div className="flex flex-col justify-start items-start w-full gap-4">
      <h1 className="text-2xl" data-svelte-h="svelte-e7rhyx">
        BMI Calculator
      </h1>
      <p className="text-slate-400" data-svelte-h="svelte-15cxd1z">
        Body mass index (BMI) is a measure of body fat based on height and
        weight that applies to adult men and women.
      </p>
    </div>
  );
}
