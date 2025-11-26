import { Header } from '@/_core/components/Header/Header';
import TextType from '@/components/TextType';

export default function Home() {
  return (
    <div className="flex justify-center flex-col w-full">
      <Header />

      <section
        id="home"
        className="h-screen flex items-center justify-center bg-primary text-primary-foreground text-5xl font-bold"
      >
        <TextType
          text={['Text typing effect', 'for your websites', 'Happy coding!']}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
        />
      </section>
      <section
        id="about"
        className="h-screen flex items-center justify-center bg-secondary text-secondary-foreground text-5xl font-bold"
      >
        About
      </section>
      <section
        id="skills"
        className="h-screen flex items-center justify-center bg-accent text-accent-foreground text-5xl font-bold"
      >
        Skills
      </section>
      <section
        id="projects"
        className="h-screen flex items-center justify-center bg-card text-card-foreground text-5xl font-bold"
      >
        Projects
      </section>
      <section
        id="contact"
        className="h-screen flex items-center justify-center bg-foreground text-background text-5xl font-bold"
      >
        Contact
      </section>

      <footer></footer>
    </div>
  );
}
