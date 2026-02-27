import Heading, { EmphasisText } from "@/components/Heading";
import { BorderBeam } from "@/components/ui/border-beam";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Cloud,
  Server,
  Database,
  Globe,
  Code2,
  Smartphone,
  Gamepad2,
  Cpu,
  Boxes,
  GitBranch,
  Terminal,
  Container,
  Layers,
  Rocket,
  Settings,
  HardDrive,
  Wifi,
  AppWindow,
  Monitor,
  TabletSmartphone,
} from "lucide-react";

function Technologies() {
  const technologiesArray = [
    {
      category: "Cloud and DevOps",
      technologies: [
        { name: "Amazon Web Services", icon: Cloud },
        { name: "Microsoft Azure", icon: Cloud },
        { name: "Google Cloud Platform", icon: Cloud },
        { name: "Docker", icon: Container },
        { name: "Kubernetes", icon: Boxes },
        { name: "Jenkins", icon: Settings },
        { name: "Terraform", icon: Layers },
        { name: "Ansible", icon: Terminal },
        { name: "GitHub Actions", icon: GitBranch },
      ],
    },
    {
      category: "Games",
      technologies: [
        { name: "Unity", icon: Gamepad2 },
        { name: "Unreal Engine", icon: Gamepad2 },
        { name: "Godot", icon: Gamepad2 },
        { name: "CryEngine", icon: Gamepad2 },
        { name: "Roblox Studio", icon: Gamepad2 },
        { name: "GameMaker", icon: Gamepad2 },
        { name: "Construct", icon: Gamepad2 },
        { name: "Cocos2d", icon: Gamepad2 },
      ],
    },
    {
      category: "Database",
      technologies: [
        { name: "MySQL", icon: Database },
        { name: "PostgreSQL", icon: Database },
        { name: "MongoDB", icon: Database },
        { name: "Oracle Database", icon: Database },
        { name: "Redis", icon: HardDrive },
        { name: "Microsoft SQL Server", icon: Database },
        { name: "Firebase Realtime Database", icon: Wifi },
        { name: "Cassandra", icon: Database },
      ],
    },
    {
      category: "Cross Platform",
      technologies: [
        { name: "Flutter", icon: Smartphone },
        { name: "React Native", icon: Smartphone },
        { name: "Electron", icon: Monitor },
        { name: "Xamarin", icon: TabletSmartphone },
        { name: "Qt", icon: AppWindow },
        { name: "Ionic", icon: Smartphone },
        { name: "Tauri", icon: Rocket },
        { name: "MAUI", icon: Layers },
      ],
    },
    {
      category: "Web Platforms",
      technologies: [
        { name: "React", icon: Code2 },
        { name: "Angular", icon: Code2 },
        { name: "Vue.js", icon: Code2 },
        { name: "Node.js", icon: Server },
        { name: "Django", icon: Globe },
        { name: "Next.js", icon: Globe },
        { name: "Nuxt.js", icon: Globe },
        { name: "Laravel", icon: Code2 },
      ],
    },
    {
      category: "Mobile Apps",
      technologies: [
        { name: "Android", icon: Smartphone },
        { name: "iOS", icon: Smartphone },
        { name: "Swift", icon: Code2 },
        { name: "Kotlin", icon: Code2 },
        { name: "Ionic", icon: Smartphone },
        { name: "Flutter", icon: Smartphone },
        { name: "React Native", icon: Smartphone },
        { name: "SwiftUI", icon: AppWindow },
      ],
    },
  ];

  return (
    <>
      <section
        className="w-full min-h-[100vh] mt-4 flex items-center py-12 bg-cover bg-center relative   "
        style={{
          backgroundImage: "url('/images/Home/gradient-rising-bg.webp')",
        }}
      >
        <div className="  container mx-auto min-h-[90vh] flex flex-col gap-10 items-center justify-center ">
          {/* Heading and Paragraph Container */}

          <div className="text-center flex flex-col items-center gap-6">
            <Heading>
              Explore Our <br /> <EmphasisText>Technolgies</EmphasisText>
            </Heading>
            <div className="w-2/3">
              <p className="leading-relaxed text-lg">
                Hire from our pool of 350+ specialized experts in web, mobile,
                and software engineering, well-versed in the latest
                techonologies and frameworks, ready to scale your development
                teams effortlessly
              </p>
            </div>
          </div>

          {/* Technology Tabs */}
          <div className="flex flex-col gap-2 items-center justify-center w-3/4">
            <Tabs
              defaultValue={technologiesArray[0].category
                .toLowerCase()
                .replace(" ", "-")}
              className="w-full max-w-full flex items-center gap-8 "
            >
              <TabsList className="bg-transparent  gap-4 rounded-full p-0 items-center border border-1 border-gray-500">
                {technologiesArray.map((technology, index) => (
                  <TabsTrigger
                    key={technology.category}
                    className="group text-white px-4 py-0 rounded-full bg-transparent  

               "
                    value={technology.category.toLowerCase().replace(" ", "-")}
                  >
                    {technology.category}

                    <BorderBeam
                      // duration={10}
                      colorFrom="#00BBFF"
                      colorTo="#F02796"
                      borderWidth={2}
                      size={80}
                      className="  rounded-full  opacity-0
    transition-opacity duration-300
    group-data-[state=active]:opacity-100"
                    />
                  </TabsTrigger>
                ))}
              </TabsList>
              {technologiesArray.map((technology, index) => (
                <TabsContent
                  key={technology.category}
                  value={technology.category.toLowerCase().replace(" ", "-")}
                  className="min-h-[100px] h-auto"
                >
                  <ul className="w-full list-style-none flex justify-center flex-wrap gap-6 ">
                    {technology.technologies.map((speciality, index) => (
                      <li
                        key={speciality.name}
                        className="flex gap-4 items-center text-sm bg-[#ffffff20] px-3 py-2 rounded-full"
                      >
                        <speciality.icon /> {speciality.name}
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
}

export default Technologies;
