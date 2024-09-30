import Footer from "@/components/footer";
import BenefitsCard from "@/components/ui/benefits-card";
import { Button } from "@/components/ui/button";
import Card from "@/components/ui/custom-card";
import CardCourses from "@/components/ui/card-courses";
import Carousel from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { course } from "@/data";
import { benefits } from "@/data";
import { ArrowRight, BookOpen, Users, Award, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  const howItWorks = [
    {
      icon: "/icon_1.png",
      title: "Course Introduction",
      description: "Learn about the different courses and how they work.",
    },
    {
      icon: "/icon_2.png",
      title: "Community",
      description: "Join our student community and connect with other learners.",
    },
    {
      icon: "/icon_3.png",
      title: "Certification",
      description: "Earn certifications and get access to exclusive content.",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen py-5">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center " href="#">
          <Image src="/swapAcademy.png" alt="Logo" width={100} height={100} />
        </Link>
        <nav className="mx-auto flex gap-4 sm:gap-6 ">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Courses
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
        <Link href={"/signin"}>
          <Button className="ml-4 text-sky-500 border-sky-500" variant="outline">
            Login
          </Button>
        </Link>
        <Link href={"/signup"}>
          <Button className="ml-4 bg-sky-500 text-white" variant="outline">
            Get Started
          </Button>
        </Link>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-24 xl:py-24">
          <div className="container grid grid-cols-1 md:grid-cols-2 mx-auto">
            <div className="flex flex-col items-start space-y-4 gap-8 ">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-8xl text-gray-600">
                  Belajar, Mengajar, dan Raih Poin di <br />
                  <span className="text-sky-500">Swap Academy!</span>
                </h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">Tukar keahlian, kumpulkan poin, dan asah kemampuanmu!.</p>
              </div>
              <Button className="bg-sky-600 hover:bg-sky-700 text-white" size="lg">
                Explore Course
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div>
              <Image src="/Hero.png" alt="Landing Page" width={596} height={399} className="w-full h-auto" />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-sky-500">How It Works</h2>
          <div className="container px-4 md:px-6 flex mx-auto justify-around gap-5">
            {howItWorks.map((item, index) => (
              <Card key={index} img={item.icon} title={item.title} description={item.description} />
            ))}
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mx-auto items-center">
              <div>
                <div>
                  <img src="/howItWorks2.png" alt="" />
                  <img src="" alt=""></img>
                </div>
              </div>
              <div>
                <p className="text-4xl  tracking-tighter sm:text-xl md:text-xl text-sky-500 mb-8">FEATURES</p>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-xl md:text-4xl xl:text-6xl text-gray-600 mb-8">Raih Poin, Buka Kesempatan Belajar!</h1>
                <p className="text-xl">
                  Di Swap Academy, dapatkan poin dengan menjadi mentor atau menyelesaikan kursus. Tukarkan poin untuk konten eksklusif, kursus premium, dan fitur khusus. Cara seru untuk tingkatkan keterampilan dan dapatkan penghargaan!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="mx-auto lg:max-w-[90%]">
            <div className="container px-4 md:px-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-4xl  tracking-tighter sm:text-xl md:text-xl text-sky-500 mb-8">FEATURES</p>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Top Courses</h2>
              </div>
              <div className="flex justify-end">
                <Button className=" bg-white hover:bg-sky-700 text-sky-500 " size="lg">
                  See All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex justify-center mx-auto gap-6">
              <Carousel course={course} />
            </div>
          </div>
        </section>

        <section className="w-full bg-white mb-48">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <p className="text-4xl  tracking-tighter sm:text-xl md:text-xl text-sky-500 mb-8">BENEFITS</p>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Why Choose Swap Academy?</h1>
          </div>
          <div className="flex justify-center mx-auto gap-6">
            {benefits.map((item, index) => {
              const bgColor = index % 3 === 0 ? "bg-sky-500" : index % 3 === 1 ? "bg-yellow-500" : "bg-purple-500";
              return <BenefitsCard key={index} icon={item.icon} description={item.description} className={`${bgColor}`} />;
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
