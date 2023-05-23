"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import ClockIcon from "./icons/Clock";
import DotIcon from "./icons/Dot";
import CarIcon from "./icons/Car";
import PlayIcon from "./icons/Play";
import PreviousIcon from "./icons/Previous";
import NextIcon from "./icons/Next";
import LoadingIcon from "./icons/Loading";

interface FullCast {
  current: {
    temp_c: string;
    condition: {
      text: string;
    };
  };
  forecast: {
    forecastday: [
      {
        date: string;
        day: {
          maxtemp_c: string;
          avgtemp_c: string;
          condition: {
            icon: string;
          };
        };
      }
    ];
  };
}

interface DateError {
  isError: false;
  title: "";
  body: "";
}

export default function Page() {
  const [data, setData] = useState<FullCast | null>(null);
  const [dateError, setDateError] = useState<DateError | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_WEATHERAPI_KEY}&q=new york&days=3&aqi=no&alerts=no`
    )
      .then((res) => res.json())
      .then((data: FullCast) => {
        setData(data);
        setLoading(false);
      });

    const getDate = function () {
      const mainDate = new Date();
      const utcDate = mainDate.getTime() + mainDate.getTimezoneOffset() * 60000;
      const NYDate = new Date(utcDate + 3600000 * -4);
      return NYDate;
    };

    const interval = setInterval(() => {
      setDate(getDate());
    }, 1000);

    setDate(getDate());

    return () => {
      clearInterval(interval);
    };
  }, []);

  let weatherList: React.ReactNode;

  if (data) {
    weatherList = data.forecast.forecastday.map((weather) => {
      return (
        <div
          key={weather.date}
          className="flex flex-col justify-center items-center font-semibold w-1/3"
        >
          <span>
            {new Date(weather.date).toLocaleDateString([], { weekday: "long" })}
          </span>
          <img
            src={`http:${weather.day.condition.icon}`}
            alt="weather.date"
            className="mt-2"
          />
          <span className="flex justify-center items-center w-full mt-2">
            <span>{weather.day.maxtemp_c}</span>
            <span className="text-slate-400 ml-4">{weather.day.avgtemp_c}</span>
          </span>
        </div>
      );
    });
  }

  return (
    <div className="w-screen h-screen bg-slate-200 text-slate-800">
      <div className="grid grid-row-5 grid-cols-5 gap-4 max-w-6xl mx-auto pt-8">
        <div className="bg-white col-start-1 col-span-2 row-start-1 row-span-3 rounded-3xl p-6 flex flex-col justify-start items-start transition-all duration-1000 ease-in-out">
          {isLoading && (
            <div className="flex flex-col justify-center items-center grow w-full px-4">
              <LoadingIcon size={128} className="animate-spin" />
            </div>
          )}
          {data && (
            <>
              <div className="font-medium text-slate-500 flex justify-start items-center w-full">
                <ClockIcon size={24} className="mr-4" />
                <span className="mr-1">
                  {date &&
                    date.toLocaleDateString([], {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    })}
                </span>

                <DotIcon size={24} className="mr-1" />

                <span>
                  {date &&
                    date.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                </span>
              </div>

              <div className="flex flex-col justify-start items-start grow pt-4 w-full">
                <div className="flex flex-col justify-start items-start grow w-full px-4">
                  <div className="grow flex justify-start items-start pt-8">
                    <span className="text-8xl font-bold">
                      {data.current.temp_c}
                    </span>
                    <span className="text-xl font-bold text-slate-600">
                      {data.current.condition.text}
                    </span>
                  </div>
                  <div className="flex justify-between items-center gap-4 w-full">
                    {weatherList}
                  </div>
                </div>
              </div>
            </>
          )}
          {/* {!data && !isLoading && <p>No profile data</p>} */}
        </div>
        <div
          className="bg-white col-start-1 col-span-2 row-start-4 row-span-2 rounded-3xl p-6 relative overflow-hidden"
          style={{
            backgroundImage: "url('/images/album_cover.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-slate-900 opacity-50 bg-gradient-to-r from-slate-900 via-transparent to-slate-900"></div>
          <div className="absolute inset-0 opacity-60 bg-gradient-to-r from-slate-900 via-transparent to-slate-900"></div>
          <div className="relative z-10 flex flex-col justify-start items-start text-white w-full h-full">
            <div className="flex flex-col justify-start items-start grow">
              <span className="text-sky-50 text-2xl font-medium">
                All My Tomorrows
              </span>
              <span className="text-sky-100 opacity-80">Frank sinatra</span>
            </div>
            <div className="relative z-20 w-full h-1 rounded-full bg-sky-100 bg-opacity-50 mb-4">
              <div className="absolute z-30 inset-0 w-1/3 h-1 rounded-full bg-sky-600"></div>
            </div>
            <div className="flex justify-around items-center w-full text-sky-100">
              <PreviousIcon
                size={48}
                className="cursor-pointer hover:opacity-70 transition-all duration-150 ease-in-out"
              />
              <PlayIcon
                size={48}
                className="cursor-pointer hover:opacity-70 transition-all duration-150 ease-in-out"
              />
              <NextIcon
                size={48}
                className="cursor-pointer hover:opacity-70 transition-all duration-150 ease-in-out"
              />
            </div>
          </div>
        </div>
        <div className="bg-white col-start-3 col-span-3 row-start-1 row-span-5 rounded-3xl p-4 flex flex-col justify-start items-start">
          <div className="grow">
            <h2 className="mb-14 relative pt-2">
              <span className="absolute top-3 left-8">
                <CarIcon size={32} />
              </span>
              <span className="ml-24 text-4xl">Daily commute</span>
            </h2>
            <p className="ml-24 text-slate-400">Ross - Updated 1 min ago</p>
            <p className="ml-24 mb-4 text-4xl">
              <span className="text-green-600 font-bold mr-2">20 min </span>
              <span>to work</span>
            </p>
          </div>
          <div className="w-full h-[29rem] overflow-hidden relative rounded-2xl">
            <Image
              src="/images/google_map.jpg"
              alt="google maps mock repesnsation"
              height={0}
              width={0}
              sizes="100%"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
