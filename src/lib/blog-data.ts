export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    date: string;
    category: string;
    readTime: string;
}

export const blogPosts: BlogPost[] = [
    {
        slug: "5-communication-habits",
        title: "5 Communication Habits That Will Save Your Marriage",
        excerpt: "Discover the small changes in how you speak to your partner that can make a massive difference in your relationship satisfaction.",
        content: `
      <p>Communication is the bedrock of any successful relationship. Yet, it's often the first thing to break down when stress and routine take over.</p>
      <h2>1. Listen to Understand, Not to Respond</h2>
      <p>Most of us are guilty of half-listening while formulating our next argument. True active listening involves hearing the emotion behind the words.</p>
      <h2>2. Use "I" Statements</h2>
      <p>Instead of saying "You never help around the house," try "I feel overwhelmed when I have to do all the chores." This reduces defensiveness.</p>
      <h2>3. The 5:1 Ratio</h2>
      <p>Research shows that for every negative interaction, you need five positive ones to maintain a healthy relationship balance.</p>
      <h2>4. Schedule Check-ins</h2>
      <p>Don't wait for a crisis to talk. Weekly check-ins can help address minor issues before they become major resentments.</p>
      <h2>5. Express Gratitude</h2>
      <p>Never underestimate the power of a simple "thank you." Acknowledging your partner's efforts fosters a culture of appreciation.</p>
    `,
        author: "Dr. Sarah Jenkins",
        date: "October 15, 2023",
        category: "Communication",
        readTime: "5 min read"
    },
    {
        slug: "rebuilding-trust-after-betrayal",
        title: "Rebuilding Trust After Betrayal: A Roadmap",
        excerpt: "Healing from infidelity or broken promises is possible. Here is a step-by-step guide to navigating the difficult journey of restoration.",
        content: `
      <p>Trust is fragile. Once broken, it can feel impossible to repair. However, with commitment and patience, many couples emerge stronger than before.</p>
      <h2>The Phase of Transparency</h2>
      <p>The betraying partner must be willing to be completely open. This might mean sharing passwords, schedules, and locations for a period of time.</p>
      <h2>The Phase of Grieving</h2>
      <p>The betrayed partner needs space to grieve the relationship they thought they had. Anger, sadness, and confusion are all normal parts of this process.</p>
      <h2>The Phase of Reconnection</h2>
      <p>Slowly, as safety is re-established, the couple can begin to find new ways to connect and build new memories.</p>
    `,
        author: "Mark Thompson, LMFT",
        date: "November 2, 2023",
        category: "Trust",
        readTime: "7 min read"
    },
    {
        slug: "spark-back-into-relationship",
        title: "How to Bring the Spark Back into Your Relationship",
        excerpt: "Feeling like roommates? Learn practical ways to reignite the passion and intimacy in your long-term partnership.",
        content: `
      <p>It's normal for the initial "honeymoon phase" intensity to fade. But that doesn't mean passion has to die.</p>
      <h2>Prioritize Date Night</h2>
      <p>It sounds cliché, but it works. Carve out time where you are just a couple, not parents or roommates.</p>
      <h2>Try Something New Together</h2>
      <p>Novelty releases dopamine. Take a cooking class, go hiking on a new trail, or visit a new city.</p>
      <h2>Physical Touch</h2>
      <p>Non-sexual physical touch—holding hands, hugging, cuddling—releases oxytocin, the bonding hormone.</p>
    `,
        author: "Dr. Emily Chen",
        date: "September 28, 2023",
        category: "Intimacy",
        readTime: "4 min read"
    }
];
