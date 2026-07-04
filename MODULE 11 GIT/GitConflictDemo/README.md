\# Git Hands-on Lab – Exercise 4 (Merge Conflict Resolution)



\## Module

Module 11 – Git





\## Objective



The objective of this exercise is to understand how merge conflicts occur in Git and how they can be resolved when different changes are made to the same file in multiple branches.



\## Description



In this exercise, a Git repository was created and a new branch named \*\*GitWork\*\* was created. The file \*\*hello.xml\*\* was modified differently in both the \*\*main\*\* branch and the \*\*GitWork\*\* branch. During the merge process, Git detected a merge conflict. The conflict was resolved manually by editing the file, staging the changes, and committing the resolved version. A `.gitignore` file was also created to ignore backup files, and the merged branch was deleted after successful integration.



\## Repository Structure



```text

GitConflictDemo/

│── README.md

│── hello.xml

└── .gitignore

```



\## Git Commands Used



```bash

git init

git branch -M main

git add README.md

git commit -m "Initial commit"



git branch GitWork

git checkout GitWork



echo "<message>Hello from GitWork Branch</message>" > hello.xml

git add hello.xml

git commit -m "Added hello.xml in GitWork"



git checkout main



echo "<message>Hello from Main Branch</message>" > hello.xml

git add hello.xml

git commit -m "Added hello.xml in main"



git log --oneline --graph --decorate --all

git diff main GitWork

git merge GitWork



git add hello.xml

git commit -m "Resolved merge conflict"



git add .gitignore

git commit -m "Added .gitignore"



git branch -d GitWork



git push -u origin main

```



\## Files Included



\- README.md

\- hello.xml

\- .gitignore



\## Expected Output



\- A new branch named \*\*GitWork\*\* is created.

\- Different changes are made to \*\*hello.xml\*\* in the \*\*main\*\* and \*\*GitWork\*\* branches.

\- Git detects a merge conflict during the merge.

\- The conflict is resolved manually.

\- The resolved changes are committed successfully.

\- The `.gitignore` file ignores backup files.

\- The merged branch is deleted.

\- The repository is pushed successfully to GitHub.



\## Result



The merge conflict was resolved successfully by manually editing the conflicting file. The changes were committed, the `.gitignore` file was added, the temporary branch was deleted, and the repository was successfully pushed to GitHub.

