import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ResultCard({
  BMI,
  state,
}: {
  BMI: number | null;
  state: "success" | "error" | "idle";
}) {
  const [classification, setClassification] = useState<{
    name: string;
    color: string;
  }>({ name: "", color: "" });

  useEffect(() => {
    if (!BMI) {
      setClassification({ name: "", color: "" });
    } else if (BMI >= 30) {
      setClassification({ name: "Obese", color: "text-red-500" });
    } else if (BMI >= 25) {
      setClassification({ name: "Overweight", color: "text-orange-500" });
    } else if (BMI >= 18) {
      setClassification({ name: "Healthy", color: "text-lime-500" });
    } else {
      setClassification({ name: "Underweight", color: "text-red-500" });
    }
  }, [BMI]);

  // function ResultState() {
  //   if (state === "success") {
  //     return (
  //       <motion.div
  //         initial={{ opacity: 0, x: "-100%" }}
  //         animate={{ opacity: 1, x: "0%" }}
  //         exit={{ opacity: 0, x: "100%" }}
  //         transition={{ duration: 0.3 }}
  //         className="flex flex-col justify-start items-start"
  //       >
  //         <p className="mb-4">
  //           You are
  //           <span className={`${classification.color} font-bold`}>
  //             &nbsp;{classification.name}&nbsp;
  //           </span>
  //           and Your BMI is
  //         </p>
  //         <p
  //           className={`${classification.color} font-bold text-8xl text-center w-full`}
  //         >
  //           {BMI}
  //         </p>
  //       </motion.div>
  //     );
  //   } else if (state === "error") {
  //     return (
  //       <motion.div
  //         initial={{ opacity: 0, x: "-100%" }}
  //         animate={{ opacity: 1, x: "0%" }}
  //         exit={{ opacity: 0, x: "100%" }}
  //         transition={{ duration: 0.3 }}
  //         className="flex flex-col justify-start items-start"
  //       >
  //         <p className="mb-4 text-red-600 text-xl">An error occurred</p>
  //         <p className="text-slate-500">
  //           Please provide your accurate height and weight to calculate your
  //           BMI.
  //         </p>
  //       </motion.div>
  //     );
  //   } else {
  //     return (
  //       <motion.div
  //         initial={{ opacity: 0, x: "-100%" }}
  //         animate={{ opacity: 1, x: "0%" }}
  //         exit={{ opacity: 0, x: "100%" }}
  //         transition={{ duration: 0.3 }}
  //         className="flex flex-col justify-start items-start"
  //       >
  //         <p className="mb-4">BMI weight ranges</p>
  //         <p className="text-slate-500">
  //           Less than 18.5 = Underweight
  //           <br />
  //           Between 18.5 - 24.9 = Healthy Weight
  //           <br />
  //           Between 25 - 29.9 = Overweight
  //           <br />
  //           Over 30 = Obese
  //         </p>
  //       </motion.div>
  //     );
  //   }
  // }

  return (
    <div className="bg-slate-900 rounded-2xl px-6 py-4 w-full h-44 mt-8">
      <AnimatePresence initial={false}>
        {state === "success" && (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: "10px" }}
            animate={{
              opacity: 1,
              y: "0",
              transition: { duration: 0.3, delay: 0.2, ease: "easeInOut" },
            }}
            exit={{
              opacity: 0,
              y: "10px",
              transition: { duration: 0.2, ease: "easeInOut" },
            }}
            className="flex flex-col justify-start items-start"
          >
            <p className="mb-4">
              You are
              <span className={`${classification.color} font-bold`}>
                &nbsp;{classification.name}&nbsp;
              </span>
              and Your BMI is
            </p>
            <p
              className={`${classification.color} font-bold text-8xl text-center w-full`}
            >
              {BMI}
            </p>
          </motion.div>
        )}
        {state === "error" && (
          <motion.div
            key="error"
            initial={{ opacity: 0, y: "10px" }}
            animate={{
              opacity: 1,
              y: "0",
              transition: { duration: 0.3, delay: 0.2, ease: "easeInOut" },
            }}
            exit={{
              opacity: 0,
              y: "10px",
              transition: { duration: 0.2, ease: "easeInOut" },
            }}
            className="flex flex-col justify-start items-start"
          >
            <p className="mb-4 text-red-600 text-xl">An error occurred</p>
            <p className="text-slate-500">
              Please provide your accurate height and weight to calculate your
              BMI.
            </p>
          </motion.div>
        )}
        {state === "idle" && (
          <motion.div
            key="idle"
            initial={{ opacity: 0, y: "10px" }}
            animate={{
              opacity: 1,
              y: "0",
              transition: { duration: 0.3, delay: 0.2, ease: "easeInOut" },
            }}
            exit={{
              opacity: 0,
              y: "10px",
              transition: { duration: 0.2, ease: "easeInOut" },
            }}
            className="flex flex-col justify-start items-start"
          >
            <p className="mb-4">BMI weight ranges</p>
            <p className="text-slate-500">
              Less than 18.5 = Underweight
              <br />
              Between 18.5 - 24.9 = Healthy Weight
              <br />
              Between 25 - 29.9 = Overweight
              <br />
              Over 30 = Obese
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
