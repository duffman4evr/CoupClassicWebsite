import React, { Component } from 'react';
import styled from "styled-components";

const AboutUsContainer = styled.div`
    margin: 0;
    width: 100%;
    height: 105vh;
    background-color: white;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
        text-decoration: none;
        color: blue;
    }
    .aboutContent {
        font-size: 1rem;
        width: 90%;
        h1 {
            font-size: 4rem;
            margin: 8vh 0 2vh 0;
        }
        h2 {
            margin: 2vh 0 2vh 0;
        }
    }
    p {
        margin: 2vh 0 2vh 0;
    }
`

class AboutUs extends Component {
    render() {
        return (
            <AboutUsContainer>
                <div className="aboutContent">
                    <h1>
                        About Us
                </h1>
                    <h2>Our Past</h2>
                    <p>
                        Coup is a guild with almost 15 years of history, originally formed in vanilla on the Shadowsong-US server. Coup was a top raiding guild on the server during vanilla, scoring several server firsts across BWL and AQ40, including server first Nefarian. <br /><br />Since then, we’ve stuck together through almost every expansion with a fairly consistent core.

                        We consider ourselves “Middlecore” because we raid, and are successful in raiding, but don’t have a desire to push hard on bleeding edge progression or compromise our values to win at all costs. <br /><br />We will also always welcome a wide variety of players and playstyles. This ranges from people who always want to play at the top of their game, all the way through to those who want to take the scenic route through the game.
               </p>
                    <h2>
                        Our Present
                </h2>
                    <p>
                        Now on Atiesh, we've killed Onyxia and Ragnaros and continued to cultivate the friendships we've made over the years.

                        Due to the nature of 40 man raiding, we will need some consistency in the raid roster, but we also place no pressure on our people when real life happens. <br /><br />If you need to take a sabbatical from raiding or the game in general, we may backfill your role, but the guild will still be here and you will still be a member when you get back. <br /><br />We’ve always treated this game as part of our hobby and not a job, and we’ve been able to maintain many of the same friends and guild members for over a decade as a result. <br /><br />We hope that in Classic we can maintain that M.O.
                        <br /><br />
                        We will endeavor to retain a raid roster around 40-50 players, and have an active member roster in excess of 100.
                </p>
                    <h2>
                        Raid Schedule
                </h2>
                    <h3>Click <a href="https://docs.google.com/document/d/15lVooHsIOXBQuzqXziKTkXuYDUxk-NLBH0kYn2DHIP8/edit" target="_blank">here</a> for detailed schedule document</h3>
                    <p>
                        Friday: 7-10 PST
                    <br />
                        Saturday: 7-10 PST
                    <br />
                        We occasionally run over if close to a kill or completion
                </p>
                    <div className="lookingFor">
                        <h2>What we're looking for:</h2>
                        <p>
                            We started out wanting to build a community first and raid team later, and we’ve been highly successful so far. <br/><br/>Now we are looking to round out our raid team with a few more like-minded adults who want to enjoy the game with us and contribute to a fun, supportive environment.
                            <br/><br/>For our raiders, we are looking for those who respect other’s time and are willing to put forth the effort required to help us maximize the time we have with our relaxed schedule.
                            <br/><br/>Additionally, individuals who are willing to accept (and at times provide) constructive feedback to help the guild improve. <br/><br/>Players with integrity. Reputation is incredibly important to us, and we want our members to embody our values and represent the guild well at all times.
    
                        <h2>What are aren’t looking for:</h2>

                        &#164; Overly toxic, racist, or homophobic behavior... We are all nerds and like to joke around with each other, but we never approve of alienating or exclusive behavior.<br /><br /> During the Blizzcon opening ceremony Chris Metzen always used to end with a saying; “Be good to each other”… We intend to do just that, and invite people that will conduct themselves in a generally positive manner.
                            <br /><br />&#164; Individuals looking to advance their own personal objectives over the objectives of the larger group. If you are overly focused on getting loot, pushing bleeding edge progression, or aren’t willing to integrate with and contribute to the guild community, this might not be the best environment for you.
                            
                            </p>
                    </div>
                </div>
            </AboutUsContainer>
        );
    }
}

export default AboutUs;



{/* <h2>
Recruitment Needs and Process
</h2>
<a href="https://docs.google.com/document/d/15lVooHsIOXBQuzqXziKTkXuYDUxk-NLBH0kYn2DHIP8/edit" target="_blank">Click for detailed schedule document</a>
<p>
Friday: 7-10 PST
<br />
Saturday: 7-10 PST
<br />
We occasionally run over if close to a kill or completion
</p> */}