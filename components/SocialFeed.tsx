import Image from "next/image";
import { socialPosts } from "@/lib/home";
import { site } from "@/lib/site";

export default function SocialFeed() {
  return (
    <section className="social-feed">
      <div className="container">
        <h2>Social Media</h2>
        {site.social.instagram && (
          <p className="social-handle">
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer">
              Follow us on Instagram
            </a>
          </p>
        )}
        <div className="social-grid">
          {socialPosts.map((post, i) => (
            <div key={i} className="social-post">
              <div className="social-post-image">
                <Image src={post.image} alt={post.caption} width={320} height={320} />
              </div>
              <p className="social-caption">{post.caption}</p>
              <span className="social-date">{post.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
