# 🚀 IT Geeks Club - Collaborative Portfolio Workshop

Welcome to the Git & GitHub Masterclass Workshop.

In this project, you will work as a team of 4 to build the official landing page for the "IT Geeks Club".

## 🎯 The Mission

The club needs a new website. The Lead Developer (Instructor) has built the skeleton, but the content is missing! Your team must split the work, work in parallel using branches, and merge your code using Pull Requests.

## 📂 Folder Structure

```
it-geeks-portfolio/
├── index.html           # MAIN FILE (Start here)
├── assets/
│   ├── css/
│   │   └── style.css    # Styles (Feel free to tweak colors)
│   ├── js/
│   │   └── main.js      # Animation logic
│   └── ItGeeks.png      # Club photo
└── README.md            # Instructions
```

## 👥 Team Assignments

Decide who is Member 1, 2, 3, and 4.

| Role | Branch Name | Section to Edit | Responsibility |
|------|-------------|-----------------|----------------|
| Member 1 | branch1 | Hero Section | Change Headline, Slogan, and Button text. |
| Member 2 | branch2 | About Section | Write club description, update stats numbers. |
| Member 3 | branch3 | Activities | Rename cards to real workshop topics (e.g., Python, UI/UX). |
| Member 4 | branch4 | Team Section | Add names and roles for 4 board members. |

## 🛠️ Step-by-Step Workflow

### Phase 1: Setup (Everyone)

Goal: Create a single shared repository for your team.

  1. Designate a Team Lead: Choose one person to host the project.

  2. Team Lead Forks: The Lead clicks Fork on this repository to copy it to their account.

  3. Add Collaborators:

   - The Lead goes to Settings > Collaborators on the newly forked repo.

   - Click Add people and enter the GitHub usernames of the other 3 members.

  4. Accept Invites: Team members check their email or GitHub notifications to accept access.

  5. Everyone Clones:

 - All 4 members clone the Team Lead's fork (NOT the original instructor's repo):
```bash
git clone https://github.com/TEAM-LEADER-USERNAME/GIT-GITHUB-WORKSHOP
cd GIT-GITHUB-WORKSHOP
```

### Phase 2: Create Your Workspace (Everyone)

Do not work on main! Create your specific branch.

```bash
git checkout -b branch-name
```
#### Change the 'origin' link to YOUR new Team Repository
```bash
git remote set-url origin https://github.com/TEAM-LEAD-USERNAME/team-name.git
```

### Phase 3: Code & Commit (Everyone)

1. Open `index.html` in VS Code.
2. Find your comment block (e.g., `<!-- MEMBER 1 AREA -->`).
3. Change the text, add divs, or change classes.
4. Save the file.
5. Stage and Commit:

```bash
git status
git add index.html
git commit -m "commit-name"
```

### Phase 4: Push & Pull Request (Everyone)

Push your branch to GitHub:

```bash
# Example for Member 1
git push -u origin branch-name
```

Go to GitHub. You will see a yellow box: "Compare & pull request". Click it.


- **Title**: "Finished Hero Section"
- **Description**: "Added new headline and button."
- Click **Create Pull Request**.

### Phase 5: Review & Merge (Team)

1. Go to the **Pull Requests** tab.
2. Open a teammate's PR.
3. Go to **Files changed**. Review their code.
4. Click **Review changes** -> **Approve**.
5. (If you have permission) Click **Merge Pull Request**.

## ⚔️ Dealing with Conflicts (The Fun Part)

If two members edited the exact same line, GitHub will block the merge.

Pull the latest main into your branch:

```bash
git checkout branch-name
git pull origin main
```

VS Code will show the conflict.

Choose "Accept Incoming" or "Accept Current" or fix manually.

Commit the fix and push again.

## ✅ Final Deliverables Checklist

- [ ] All 4 branches created correctly (feature-xyz).
- [ ] All 4 Pull Requests created.
- [ ] At least 1 PR reviewed by a teammate.
- [ ] All PRs merged into main.
- [ ] Website opens locally with all sections complete.

## 🎉 Congratulations!

You are now Git contributors!

---

**Built with ❤️ by IT Geeks Club**










