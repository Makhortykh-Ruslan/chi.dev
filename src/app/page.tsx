import { Header } from '@/_core/components/Header/Header';
import TextType from '@/components/TextType';

export default function Home() {
  return (
    <div className="flex w-full flex-col justify-center">
      <Header />

      <section
        id="home"
        className="bg-primary text-primary-foreground flex h-screen items-center justify-center text-5xl font-bold"
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
        className="bg-secondary text-secondary-foreground flex h-screen items-center justify-center text-5xl font-bold"
      >
        About
      </section>
      <section
        id="skills"
        className="bg-accent text-accent-foreground flex h-screen items-center justify-center text-5xl font-bold"
      >
        Skills
      </section>
      <section
        id="projects"
        className="bg-card text-card-foreground flex h-screen items-center justify-center text-5xl font-bold"
      >
        Projects
      </section>
      <section
        id="contact"
        className="bg-foreground text-background flex h-screen items-center justify-center text-5xl font-bold"
      >
        Contact
      </section>

      <footer></footer>
    </div>
  );
}
