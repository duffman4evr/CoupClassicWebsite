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

      <Header as='h2'>Phase 3 And Beyond</Header>
      <p>
        Coup has voted internally, and we will be switching from a DKP system to a loot council based system
        for BWL and beyond. Expect this page to be updated with details on that new system soon!
        Read on to learn about how the old DKP system works.
      </p>

      <Header as='h2'>Pillars</Header>
      <p>
        This article is for raiders who wish to understand how Coup Classic’s
        DKP system works, how they can earn loot, and how they can plan for the
        long term regarding equipment upgrades. The following pillars guide all
        of our decisions about loot within the guild. This includes the policy
        as well as on-the-spot decisions made during raids. When we aren’t sure
        what to do, we check back with the pillars for guidance.
      </p>
      <ol>
        <li>
          <b>Getting loot should be a regular occurrence.</b>
          <br />
          <i>
            Seeing your character become stronger over time is a core tenet of
            RPGs, and loot is a big part of that. Consistent raiders should get
            a shot at good loot at regular intervals. Raiders that take lots of
            ‘leftover’ loot should not be put into a negative DKP hole they
            can't dig out of.
          </i>
        </li>
        <Divider />
        <li>
          <b>Simplicity is more important than total completeness.</b>
          <br />
          <i>
            Not all exceptional cases can be covered by a loot system.
            Furthermore, we believe that a loot system that attempts to address
            all edge cases will end up overly complicated and difficult to
            execute properly. We place trust in our raiders and leadership to
            act in the best interests of the guild when exceptional cases come
            up.
          </i>
        </li>
        <Divider />
        <li>
          <b>Consistence and competence are rewarded.</b>
          <br />
          <i>
            The best kind of raiders are consistent and competent. Our loot
            system strives to reward these players.
          </i>
        </li>
      </ol>
      <Divider />
      <Header as='h2'>DKP System Overview</Header>
      <p>
        Coup Classic’s DKP system has fixed prices for each piece of loot. To
        see the prices, visit the &nbsp;
        <a href={spreadsheetLink} target='_blank' rel='noopener noreferrer'>
          pricing spreadsheet
        </a>
        . The prices are set by the officers of the guild, based on their
        knowledge of how powerful the items are. Better items cost more.
      </p>
      <p>
        Raiders and Trial Raiders earn DKP by attending raids, being on time, and generally
        contributing to the guild. See the FAQ below for a complete list of all
        the ways a raider can attain DKP. DKP earnings from guild bank
        contributions are capped each week.
      </p>
      <p>
        Raiders that are online 15 minutes before raid start but don't make it
        into the raid can be placed on the standby list, if they wish. When the raid is full,
        the DKP officer will call out for folks that want to be standby for the raid. These folks can
        whisper back to the DKP officer to join the standby list. <b>Being on standby means that the raider remains
        reachable via in-game or discord and keeps their main character ready to zone-in to the instance
        within 5 minutes of being asked.</b> For their trouble, standbys earn DKP for boss
        kills just the same as raider that's in the instance. Again, being on standby is optional,
        but we do expect standbys to be ready to swap in quickly, in order to keep the raid running smoothly.
      </p>
      <p>
        When an item drops within a raid, raiders that can equip the item are
        allowed to bid on it. Again, the item prices are fixed, so “bidding”
        really means that a raider is declaring their intent to buy that item
        for its fixed price. In order to place a bid, the raider will send a
        ‘!bid’ tell to the current raid’s loot officer. After all bids have been
        collected, the bidder with the highest DKP total will be awarded the
        item, and will immediately pay for the item in DKP. If there is a tie,
        the tied players will /roll. If the winning bidder doesn’t have enough
        DKP to pay for the item, they will go into the negative.
      </p>
      <p>
        If no one bids on a piece of loot, it will be sent to the guild disenchanter,
        but they won't disenchant it immediately. At that point, the master looter will announce that
        folks looking for off-spec gear can declare interest. If you'd like to use that item for an off-spec,
        you can whisper the guild disenchanter at that point. If two or more people are interested in the item,
        class leads and guild leadership will loot-council to determine which bidder get the item.
        The guild disenchanter will trade the item to the winner. Definitions of what off-spec gear is can
        be found in the FAQ below.
      </p>
      <p>
        DKP decays on a weekly basis as well. Each Sunday, every guild member’s
        DKP is multiplied by 80% to get their new value. This applies to both
        negative and positive DKP. For example, if a raider had 100 DKP before
        decay occurred, they’d have 80 DKP after decay for that week. If a
        raider had -150 DKP before decay, they’d have -120 DKP after decay. This
        means it is advantageous to have negative DKP, from a decay perspective.
        DKP decay may also result in fractional values of DKP. For example,
        decay on 13 DKP would yield a value of 10.4. These fractional values are
        rounded (resulting in 10 DKP in this case).
      </p>
      <p>
        Some items are not eligible for purchase with DKP. Legendary items will
        be distributed based on leadership discretion.
      </p>
      <p>
        Every raider starts with an initial amount of 25 DKP. When a new raiding
        tier releases, DKP will <b>reset</b> back to 25 for every raider.
      </p>
      <Divider />
      <Header as='h2'>FAQ</Header>
      <p>
        <b style={{ color: cobalt }}>
          Q: What are the ways I can earn DKP and how much will I earn?
        </b>
      </p>
      <p>
        As a guild member with the ‘Raider’ or 'Trial Raider' rank, you can earn DKP in the
        following ways:
      </p>
      <ul>
        <li>Participate in a boss kill in the raid: 5 DKP</li>
        <li>Be on the standby list during a boss kill: 5 DKP</li>
        <li>
          Be online 15 minutes before raid start (regardless of whether you end
          up in the raid or on standby): 5 DKP
        </li>
        <li>
          Be present at the end of the raid (again, regardless of whether you
          are in the raid or on standby): 5 DKP
        </li>
        <li>
          Contribute to the guild bank: Officer discretion, but capped at 5 DKP
          weekly
        </li>
        <li>Swap in to a live raid to fill an empty slot: 10 DKP</li>
      </ul>
      <Divider />
      <p>
        <b style={{ color: cobalt }}>
          Q: Why do people earn DKP in the above situations?
        </b>
      </p>
      <p>
        We dole out DKP to raiders that exhibit the behavior we want to see.
        Being on time, staying until the end, and being ready to swap in are all
        important for the guild to succeed. On top of that, we know that it is
        difficult to set aside time to raid. If you don’t make it into a raid,
        we want to make sure we compensate you, so that you can bid on some gear
        next time around.
      </p>
      <Divider />
      <p>
        <b style={{ color: cobalt }}>
          Q: What items am I allowed to bid on? Is there a priority system?
        </b>
      </p>
      <p>
        You are allowed to bid on any non-legendary items that you can equip or
        use. There is no hard priority system in play, though we do emphasize
        that we expect raiders to do the following:
      </p>
      <ul>
        <li>
          <b>Be complete experts on their own classes itemization.</b>
          <br />
          <i>
            You should know which stats matter for you and which ones don’t. We
            also encourage our raiders to have a personal gearing plan that
            extends into the end of Naxx, so that they will know the expected
            ‘lifespan’ of items they might bid on.
          </i>
        </li>
        <li>
          <b>Have decent awareness of what other classes need.</b>
          <br />
          <i>
            It would be ridiculous to expect each raider to have every BIS list
            of every class memorized, but situations will occur when a raider
            might see a potential upgrade drop, which for another class might be
            BIS until Naxx, for example. Leadership may step in for cases like
            these and require folks to hold their bid and let another raider bid
            on a BIS item that they will utilize for months or even years.
          </i>
        </li>
      </ul>
      <Divider />
      <p>
        <b style={{ color: cobalt }}>
          Q: I disagree with some of the item pricing, who should I talk to?
        </b>
      </p>
      <p>
        Please talk to Switch or Evilmonstar about item pricing. We encourage
        raiders to take incremental upgrades on their way to BIS, because
        incremental upgrades help raid progression. As such, the pricing
        reflects this mindset. However, pricing may not exactly match the
        current 'stats-are-nearly-worthless' BIS meta, because we don't buy into
        that meta fully. For example, we don't want raiders passing up large
        stat upgrades because they'd miss out on a little bit of spellpower.
        Your DPS is 0 if you are dead.
      </p>
      <Divider />
      <p>
        <b style={{ color: cobalt }}>
          Q: Why do we have a cap on guild bank contribution DKP?
        </b>
      </p>
      <p>
        Some folks have more time to play than others. We don’t want to leave a
        door open for for exploiting that time to get an unreasonable DKP
        advantage over others.
      </p>
      <Divider />
      <p>
        <b style={{ color: cobalt }}>Q: Why use a fixed price system?</b>
      </p>
      <p>
        A fixed price system eliminates collusion between players. With bidding
        DKP systems, it’s common for raiders to form bidding alliances within
        their class where they min-bid tier gear and save their DKP for more
        competitive items. Fixed pricing closes the door on this exploit.
      </p>
      <Divider />
      <p>
        <b style={{ color: cobalt }}>Q: Why have decay?</b>
      </p>
      <p>
        Because we are using a fixed-price system, DKP is going to inflate over
        time. We don’t want new raiders to feel that they have to climb an
        insurmountable mountain to have a relevant amount of DKP.
      </p>
      <p>
        For the curious: Consider a raid where a boss drops 3 pieces of loot,
        each valued at 40 DKP. Each member of the raid earned 5 DKP for that
        kill, thus creating 200 new DKP for the kill, but only having 120 of it
        be ‘spent’ on the gear. In this case, we’ve inflated the guild DKP pool
        by 80. Because of this inflation, we add a decay to keep DKP values in
        check.
      </p>
      <p>
        Having decay also puts a soft cap on DKP. If you never spend any DKP,
        eventually your weekly decay will match the amount you can earn in a
        week. That’s the ‘soft cap’.
      </p>
      <Divider />
      <p>
        <b style={{ color: cobalt }}>Q: Why negative DKP?</b>
      </p>
      <p>
        There may be cases where a piece of gear drops and no one has enough DKP
        to ‘afford’ it. It would be silly to shard this gear just because no one
        can pay for it without going into the negative, so we allow it.
      </p>
      <Divider />
      <p>
        <b style={{ color: cobalt }}>
          Q: Why should decay help folks that are in the negative?
        </b>
      </p>
      <p>
        New raiders might scoop up a lot of catch-up gear in their first raids,
        especially for instances we have on farm. They will go deeply into the
        negative and thus not be able to snag progression gear (which is
        appropriate given the situation), but we don’t want them to get put into
        a hole they can’t dig out of. Decay will assist them in getting out of
        that hole a bit faster, but doesn’t do the whole job for them.
      </p>
      <Divider />
      <p>
        <b style={{ color: cobalt }}>
          Q: Why do I earn these specific amounts of DKP?
        </b>
      </p>
      <p>
        We’ve picked these values to allow for steady DKP inflation. In other
        words, the guild (as a whole) should earn more DKP than they have
        opportunity to spend. This allows for the decay mechanic to work as
        intended, putting pressure on raiders to take regular upgrades.
      </p>
      <p>
        If the opposite were true (the guild spends more DKP than they earn each
        week), then the entire guild would slowly go into the negative. At that
        point, decay would be boosting everyone’s DKP on a weekly basis, and the
        raiders that see the most benefit would be the ones that took the most
        gear. Not the system we want.
      </p>
      <Divider />
      <p>
        <b style={{ color: cobalt }}>Q: Why is 25 DKP the starting amount?</b>
      </p>
      <p>
        Let’s consider if we started with 0 DKP instead. In our early raids,
        most folks would tie each other and roll off for gear. Some of the
        winners of these rolls may end up going into negative DKP by the end of
        the raid. When decay occurs, these raiders will end up getting a DKP
        boost. It is a double-whammy for these folks to get early gear and have
        decay advantage, so we start with 25 DKP to reduce the impact of this
        issue.
      </p>
      <p>
        This also means that new raiders joining us will also start at 25 DKP,
        to keep things fair.
      </p>
      <Divider />
      <p>
        <b style={{ color: cobalt }}>
          Q: Why do we reset DKP between raid tiers?
        </b>
      </p>
      <p>
        We want folks spending their DKP to strengthen their characters. Without
        a reset, raiders will be tempted to stockpile DKP towards the end of a
        tier. Decay negates some of this stockpiling, but not completely. When
        stockpiling happens, raiders pass up existing upgrades in the current
        tier, which hurts guild progression.
      </p>
      <p>
        Resets also allow for us to take a second look at the DKP system and its
        rules, and refine those going into the next tier. We don’t presume to
        get everything right the first time around, and a reset presents an
        opportunity for us to improve the system without making the changes
        on-the-fly (which can be too disruptive).
      </p>
      <Divider />
      <p>
        <b style={{ color: cobalt }}>Q: Can non-raiders earn DKP?</b>
      </p>
      <p>
        Generally, only raiders will earn DKP, since they will the the ones
        invited to raids. Non-raiders are not present in the DKP system, and
        can’t earn DKP by making contributions to the guild bank. This is
        because a non-raider won’t generally have a secure raid spot, and we
        don’t want them to watch their DKP decay helplessly after making a
        contribution into the bank.
      </p>
      <p>
        However, in the situation where the guild brings in a non-raiding member
        to fill a slot in a raid (such as a Trial), they will become active in
        the DKP system. If inviting them to raids becomes a regular occurence,
        then they will just get promoted to raider anyway and start raiding
        regularly.
      </p>
      <Divider />
      <p>
        <b style={{ color: cobalt }}>
          Q: Do characters earn DKP or do players earn DKP?
        </b>
      </p>
      <p>
        Characters earn DKP. This is mostly to align with the Addon we are
        planning on using. There are trade-offs that are both good and bad that
        go along with this choice. As we move forward, we may re-evaluate this
        choice to see if we can land on something better, if the need arises.
      </p>
      <Divider />
      <p>
        <b style={{ color: cobalt }}>
          Q: Why use Loot Council for off-spec gear?
        </b>
      </p>
      <p>
         Raiders will usually not want to spend DKP on off-spec gear. On top of that, we don't want to disenchant loot that might be useful offspec loot for a raider.
         Having a great set of offspec gear gives the guild flexibility,
         allowing us to have raiders respec to fill needs for a raid.
         Doing this via loot council allows us to get a few folks into offspec-ready shape more quickly.
      </p>
      <Divider />
      <p>
        <b style={{ color: cobalt }}>
          Q: What constitutes 'off-spec' gear?
        </b>
      </p>
      <p>
         To answer this, we must first define a couple of things:
         <ul>
         <li> <strong>Raid Role:</strong> A raid role is either DPS, Healing, or Tanking. Ranged DPS and Melee DPS are considered part of the DPS role. </li>
         <li> <strong>Main Role:</strong> Your main role is the raid role you negotiate with leadership are expected to fill on a week-to-week basis. Main roles can change, but they don't change often. </li>
         </ul>
         Off-spec gear is any equippable gear that is itemized for a different raid role than your main raid role, or that isn't useful to your main role in this tier, but can be used in a later raid tier.
      </p>
      <Divider />
      <p>
        <b style={{ color: cobalt }}>
          Q: Why is off-spec gear defined this way?
        </b>
      </p>
      <p>
         The point of offspec gear is the same as any other gear - guild progression.
         In this instance, it does two things: 1) gives our raid long-term flexibility by having folks able to
         respec into other needed roles on-the-spot,
         and 2) allows the raid to prepare for challenges of future tiers by avoiding rot on gear that isn't usable today.
      </p>
      <Divider />
      <p>
        <b style={{ color: cobalt }}>
          Q: Can I buy off-spec gear with DKP as well?
        </b>
      </p>
      <p>
         Yes. If you don't want to leave it up to the loot council, you can use your DKP to buy offspec gear.
         However, your DKP bid for an offspec piece takes lower priority than folks bidding to use the gear as mainspec.
         If you make an offspec bid, please call it out in chat / discord to help avoid confusion as to why you are bidding.
      </p>
    </Container>
  </Container>
);

export default LootPolicy;
