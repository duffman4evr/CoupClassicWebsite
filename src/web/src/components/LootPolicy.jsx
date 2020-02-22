import React from 'react';
import { Container, Header, Divider } from 'semantic-ui-react';

const spreadsheetLink =
  'https://docs.google.com/spreadsheets/d/1j-WYZj_PZVQ6KXo3r-FiLrqwNbJHyvv2dWE2Hsipk3E/edit#gid=0';
const cobalt = '#0050AB';

const LootPolicy = () => (
  <Container
    style={{
      backgroundColor: '#DEDEDE',
      minHeight: 'calc(100vh - 50px)'
    }}
  >
    <Header as='h1'>Loot Policy</Header>
    <Divider />
    <Container text textAlign='left' style={{ paddingBottom: '50px' }}>

      <Header as='h2'>Purpose</Header>
      <p>
        This document outlines how loot council will work within Coup in detail. On top of that, the philosophies behind the system are explained and justified here as well. If you don’t care about the details, the Overview and FAQ sections should be enough information to understand what to do. If you want to go deep, read the whole thing! If you have any questions, please direct them at guild leadership.
      </p>

      <Header as='h2'>Overview</Header>
            <p>
              The loot council is composed of all of the class leads, as well as the Guild Leader (Evilmonstar) and Switch. Evil and Switch won’t always vote, but may do so if they feel strongly or need to break a critical tie.
            </p>
            <p>
              We use the <a href="https://www.curseforge.com/wow/addons/rclootcouncil-classic">
                                   RCLootCouncil
                                 </a> addon to facilitate loot distribution. When an item drops within the raid, folks that are interested may declare that interest using the addon. An interested raider can declare how critical the item is for them using these categories (in priority order):
            </p>
      <ol>
        <li>
          <b>BIS</b> - for items that are Best-In-Slot across all gear that is currently available.
        </li>
        <Divider />
        <li>
          <b>Upgrade </b> - for upgrades that aren't BIS but still helpful.
        </li>
        <Divider />
        <li>
          <b>Sidegrade  </b> - for tiny upgrades or sidegrades that are still for mainspec.
        </li>
        <Divider />
        <li>
          <b>Off-spec/PVP</b> - for off-spec items that aren’t part of your mainspec, but could be used to help the raid as part of another spec, or items that are primarily useful for PVP.
        </li>
      </ol>
      <p>
        Raiders that have ‘special’ circumstances (e.g. hitting a tier set breakpoint, or gear for an off-spec that they intend to raid with), should be sure to message their class lead about these circumstances after they hit their respective button. Loot council can then take these special circumstances into consideration as well.
      </p>
      <p>
        The addon will show these selections, as well as who made them, to the council. Additionally, the addon will show loot history for each ‘bidder’ and an automatic /roll to help with tiebreaking. On top of this information, the loot council members are expected to consider many other factors when casting their vote. The factors at play (and the philosophy behind them), are discussed below in this document. Finally, the raider who got the most votes wins the item. If there is a tie in votes, the winner will be determined by roll or a tiebreak vote cast by Evil/Switch, depending on the situation and who did or did not vote already.
      </p>
      <p>
        Vote totals are not shown to the raid at large. Members of the loot council can see each other’s individual votes, in order to facilitate quick discussion.
      </p>

      <Header as='h2'>Factors that Drive Loot Decisions</Header>

      <Header as='h4'>Philosophy</Header>

      <p>
        Loot council can be run in many different ways. On one extreme, we could closely track and record factors like attendance, bank contributions, etc, so that we can have detailed and accurate data about what is going on. We could also publish these records to the entire guild. A positive of this approach is the transparency gained, but a drawback is that LC begins to look like a high effort, dkp-like system. We’d also expect confusion about how much ‘weight’ is put behind each factor.
      </p>
      <p>
        On the other extreme, we could track absolutely nothing and rely on officers’ memory when considering the factors. This approach is low effort, but may not be as precise.
      </p>
      <p>
        Here’s our philosophy: The point of loot council is to introduce ‘grey area’, so that council members have the freedom to use their entire brains when making a loot decision. Some factors might come up situationally and not be written into this doc. On top of that, factors don’t generally equate to each other (how many raids attended is a black lotus bank contribution ‘worth’)?
      </p>
      <p>
        We believe that closely tracking every single factor is not necessary, but that doesn’t mean we won’t track anything at all. We evaluate factors on a case-by-case basis to determine which ones should be tracked. For example, tracking raid attendance (including who sits) can help us rotate people in and out of the raid on a week-to-week basis, and also serve as a useful datapoint for LC to consider.
      </p>
      <p>
        Finally, loot council members have both read and helped write this document. As such, they agree to, with their best judgment, consider the factors listed here when making loot decisions. However, we recognize that individual council members may put more emphasis on certain factors over others, and that’s OK. Having a large council allows this kind of personal preference to average out, and also provides a forum for council members to justify their choices to each other.
      </p>
      <Header as='h4'>Factors Considered</Header>
      <Divider />
      <p>
        <b style={{ color: cobalt }}>
          Class/spec priority per item
        </b>
      </p>
      <p>
        A piece of gear’s stats will indicate what classes benefit the most. On top of that, the long-term outlook of a piece of gear is worth considering too. We want to distribute loot that takes a long time to be replaced, because of how high quality it is for that particular class. For example, since mages have access to a powerful class-specific trinket (MQG), we consider ToEP to be warlock priority due to their lack of options in this area. We published our class priority here. Please read through it and alert leadership if you have disagreements.
      </p>
      <Divider />
      <p>
        <b style={{ color: cobalt }}>
          Attendance
        </b>
      </p>
      <p>
        Being on time, and consistently able to attend raids is helpful for having a strong core that can down content. However, a raid only fits 40. Some folks might not make it into raids, so we don’t ‘dock’ people that showed up but didn’t make it in. Loot council will consider attendance beyond who made it into the raid, but rather folks that were ready to go when the raid started, and were able to swap in when needed.
      </p>
      <Divider />
      <p>
        <b style={{ color: cobalt }}>
          Performance
        </b>
      </p>
      <p>
        High performance keeps raids running smoothly and quickly. We want to reward high performers, but we consider their current performance in context. We are well aware that funneling gear to high performers because of their performance is a self fulfilling prophecy. We look for folks that are performing well given their current gear/buff situation. Additionally, we notice folks that put in effort outside of raids to maximize their performance. This means farming pre-raid BIS where reasonable, and bringing consumables. However, we also understand that not all consumables are critical, and not all consumables are affordable long term. We also understand that not all pre-raid BIS is quick to farm, and not everyone has the same ability to dump time into the game. We strive to ride a reasonable line between casual and hardcore here, and communicate our expecations in advance.
      </p>
      <Divider />
      <p>
        <b style={{ color: cobalt }}>
          Helpfulness to the Guild
        </b>
      </p>
      <p>
        Being online during the week (aka not just raid logging) is important for keeping the guild alive and thriving. Making donations to the bank ultimately levels up our raid performance. People that go above and beyond to do these things are remembered when the time comes to distribute loot.
      </p>
      <Divider />
      <p>
        <b style={{ color: cobalt }}>
          Guild Progression
        </b>
      </p>
      <p>
        Firstly, giving gear to folks for which it is the largest upgrade is an effective way to speed progression. Secondly, having a plan that involves funneling gear can lead to progression gains for the guild as a whole. For some classes, tier bonuses are mega-important. That class might have a gear plan that involves getting certain members to valuable breakpoints. Those kinds of plans will be discussed ahead of time, amongst the members of that class. Thirdly, we may funnel gear to an entire class in order to make better progress. For example, Warrior tier bonuses are critical in Naxx, so we would funnel gear that way. Ahead of this, we would funnel tier gear to Rogues in AQ40 (since they share a Tier 3 token with warriors), so that Rogues are in tip-top shape while they wait for warriors to get what they need in Naxx.
      </p>
      <Divider />
      <p>
        <b style={{ color: cobalt }}>Loot History</b>
      </p>
      <p>
        Going without upgrades for a long period is no fun. Sometimes RNG will screw us over, but we will do the best we can to have gear distributed so that raider’s aren’t starved. This factor can obviously have tension with the ‘Guild Progression’ factor above, so we communicate plans ahead of time in order to best manage expectations.
      </p>
      <Header as='h2'>FAQ</Header>
      <p>
        <b style={{ color: cobalt }}>Q: Why didn’t I get this piece of loot? I had perfect attendance!</b>
      </p>
      <p>
        Being ‘on top’ for one factor doesn’t guarantee loot. All factors have to be considered when making a decision. In some cases, factors can even override others. For example, class priority might dictate that a Mage should get a piece of gear, but the circumstances and factors present at that point in time might mean that some other class gets it instead. The takeaway here is that there are no hard guarantees. Having this ‘grey area’ is the main reason to use Loot Council to begin with.
      </p>
      <Divider />
      <p>
        <b style={{ color: cobalt }}>Q: What if an LC member doesn't attend all raids for that week?
</b>
      </p>
      <p>
        If an LC member can't make a raid, we expect them to communicate their short term gearing plans for raiders of their class, so that other council members can vote along the lines that make sense for them.
      </p>
      <Divider />
      <p>
        <b style={{ color: cobalt }}>
          Q: What if an item is both BIS in raiding and useful for PVP for me?
        </b>
      </p>
      <p>
        When an item satisfies multiple categories, pick the highest priority one to bid with. In this case, the item would be classified as BIS for this bid.
      </p>
      <Divider />
      <p>
        <b style={{ color: cobalt }}>
          Q: Does taking an 'Upgrade' disqualify me from getting BIS in the near future?
        </b>
      </p>
      <p>
        No. In fact, the opposite is true. If you deny yourself loot on purpose so that you can get a hotly-contested upgrade later on, we won’t have any sympathy for you if you don’t get it. Any drama stirred up in this way won’t be tolerated. We don’t want raiders treating LC as some sort of meta-DKP where they avoid bidding on items to build some sort of ‘credit’. The point is to, as a raider, always bid on everything that’s an upgrade so that LC is informed of everyone’s needs on a constant basis.
      </p>
    </Container>
  </Container>
);

export default LootPolicy;
