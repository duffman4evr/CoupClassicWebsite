import React from 'react';
import { Container, Header, Divider } from 'semantic-ui-react';

const AboutUs = () => (
  <Container
    style={{
      backgroundColor: '#DEDEDE',
      minHeight: 'calc(100vh - 50px)'
    }}
  >
    <Header as='h1'>About Us</Header>
    <Divider />
    <Container text textAlign='left' style={{ paddingBottom: '50px' }}>
      <Header as='h2' textAlign='left' floated='right'>
        <a
          href='https://docs.google.com/document/d/15lVooHsIOXBQuzqXziKTkXuYDUxk-NLBH0kYn2DHIP8/edit'
          target='_blank'
          rel='noopener noreferrer'
        >
          View Raid Schedule
        </a>
      </Header>
      <Header as='h2'>Our Past</Header>
      <p>
        Coup is a guild with almost 15 years of history, originally formed in
        vanilla on the Shadowsong-US server. Coup was a top raiding guild on the
        server during vanilla, scoring several server firsts across BWL and
        AQ40, including server first Nefarian. <br />
        <br />
        Since then, we’ve stuck together through almost every expansion with a
        fairly consistent core. We consider ourselves “Middlecore” because we
        raid, and are successful in raiding, but don’t have a desire to push
        hard on bleeding edge progression or compromise our values to win at all
        costs. <br />
        <br />
        We will also always welcome a wide variety of players and playstyles.
        This ranges from people who always want to play at the top of their
        game, all the way through to those who want to take the scenic route
        through the game.
      </p>
      <Divider />
      <Header as='h2'>Our Present</Header>
      <p>
        Now on Atiesh, we've killed Onyxia and Ragnaros and continued to
        cultivate the friendships we've made over the years. Due to the nature
        of 40 man raiding, we will need some consistency in the raid roster, but
        we also place no pressure on our people when real life happens. <br />
        <br />
        If you need to take a sabbatical from raiding or the game in general, we
        may backfill your role, but the guild will still be here and you will
        still be a member when you get back. <br />
        <br />
        We’ve always treated this game as part of our hobby and not a job, and
        we’ve been able to maintain many of the same friends and guild members
        for over a decade as a result. <br />
        <br />
        We hope that in Classic we can maintain that M.O.
        <br />
        <br />
        We will endeavor to retain a raid roster around 40-50 players, and have
        an active member roster in excess of 100.
      </p>
      <Divider />
      <Header as='h2'>Raid Times</Header>
      <p>
        Friday: 7:00pm-10:00pm Pacific (PST)
        <br />
        Saturday: 7:00pm-10:00pm Pacific (PST)
        <br />
        <i>We occasionally run over if close to a kill or completion</i>
      </p>
      <Divider />
      <Header as='h2'>What We're Looking For</Header>
      <p>
        We started out wanting to build a community first and raid team later,
        and we’ve been highly successful so far. <br />
        <br />
        Now we are looking to round out our raid team with a few more
        like-minded adults who want to enjoy the game with us and contribute to
        a fun, supportive environment.
        <br />
        <br />
        For our raiders, we are looking for those who respect other’s time and
        are willing to put forth the effort required to help us maximize the
        time we have with our relaxed schedule.
        <br />
        <br />
        Additionally, individuals who are willing to accept (and at times
        provide) constructive feedback to help the guild improve. <br />
        <br />
        Players with integrity. Reputation is incredibly important to us, and we
        want our members to embody our values and represent the guild well at
        all times.
      </p>
      <Divider />
      <Header as='h2'>What We Aren't Looking For</Header>
      <p>
        Overly toxic, racist, or homophobic behavior... We are all nerds and
        like to joke around with each other, but we never approve of alienating
        or exclusive behavior.
        <br />
        <br /> During the Blizzcon opening ceremony Chris Metzen always used to
        end with a saying; “Be good to each other”… We intend to do just that,
        and invite people that will conduct themselves in a generally positive
        manner.
        <br />
        <br />
        Individuals looking to advance their own personal objectives over the
        objectives of the larger group. If you are overly focused on getting
        loot, pushing bleeding edge progression, or aren’t willing to integrate
        with and contribute to the guild community, this might not be the best
        environment for you.
      </p>
    </Container>
  </Container>
);

export default AboutUs;
