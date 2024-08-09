import Container from "@/components/shared/container";
import type { Metadata } from "next";
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: "Project",
  description: "Juzis Project",
};

export default function Work() {
  return (
    <Container size="large">
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          This page is for showcasing my projects.
        </p>
        <hr className="my-6 border-neutral-200 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Projects</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          2023-{new Date().getFullYear()}
        </p>
          <p>1.<a href="https://juzi.club" target="_blank">JuziClub</a>   MyGuild</p>
          <p>2.<a href="https://juz1.cn/blog" target="_blank">Blog</a>   MyBlog</p>
          <p>3.<a href="https://forum.juz1.cn" target="_blank">Forum</a>   MyForum</p>
          <p>4.<a href="https://mail.juz1.cn" target="_blank">MAIL</a>   MyMail</p>
          <p>5.<a href="https://kook.juz1.cn" target="_blank">KOOK</a>   MyKOOK</p>
          <p>6.<a href="https://discord.juz1.cn" target="_blank">Discord</a>   MyDiscord</p>
          <p>7.<a href="https://status.juz1.cn" target="_blank">Status</a>   MyStatus</p>
          <p>8.<a href="https://img.juz1.cn" target="_blank">IMG</a>   MyIMGBed</p>
          <p>9.<a href="https://music.juz1.cn" target="_blank">Music</a>   MyMusic</p>
          <p>10.<a href="https://quickpass.juz1.cn" target="_blank">Quickpass</a>   MyQuickpass</p>
          <p>11.<a href="https://sponsor.juz1.cn" target="_blank">Sponsor</a>   SponsorMe</p>
          <p>12.<a href="https://public.juz1.cn" target="_blank">Public</a>   MyPublicProject</p>
      </div>
      <script src="https://res.juz1.cn/js/copyright.js" async></script>
              <Footer />
    </Container>
  );
}
