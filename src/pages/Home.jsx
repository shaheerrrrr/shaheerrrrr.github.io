import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <h1 className="visually-hidden">Shaheer Khan</h1>

      <p className="home__intro measure">
        I currently study computer science at Vanderbilt University. I want to build
        software and hardware that makes people&rsquo;s lives easier &mdash; right now
        that means AR/VR, computational neuroscience, and robotics. I&rsquo;m also
        drawn to people-facing roles: I like seeing how my work actually affects
        people, and connecting with others in a meaningful way.
      </p>

      <p className="home__intro measure">
        Previously, I&rsquo;ve built a browser extension that pulls RateMyProfessor
        ratings into Vanderbilt&rsquo;s course registration platform, and trained PPO
        policies for robotic manipulation in MuJoCo/Meta-World. See more on the{' '}
        <Link to="/work" className="link">
          work page
        </Link>
        .
      </p>

      <p className="home__intro measure">
        In my free time, I play violin and take photos &mdash; usually with Malcolm
        Todd, Giveon, or Frank Ocean playing in the background. I also play volleyball
        and pickleball, and compete in hackathons when I can.
      </p>
    </div>
  );
}
