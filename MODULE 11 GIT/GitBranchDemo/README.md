\# Git Hands-on Lab – Exercise 3 (Branching and Merging)



\## Module

Module 11 – Git



\## Objective

The objective of this exercise is to understand Git branching and merging. The exercise demonstrates creating a branch, making changes in the branch, merging the branch into the main branch, and deleting the merged branch.



\## Description

A new Git repository was created. A branch named `GitNewBranch` was created, and changes were made within the branch. These changes were committed and then merged into the `main` branch. Finally, the branch history was verified and the temporary branch was deleted.



\## Files Included

\- README.md

\- welcome.txt



\## Git Commands Used



```bash

git init

git branch GitNewBranch

git branch -a

git checkout GitNewBranch

echo "Branching and Merging Demo" > welcome.txt

git add welcome.txt

git commit -m "Added file in GitNewBranch"

git status

git checkout main

git diff main GitNewBranch

git merge GitNewBranch

git log --oneline --graph --decorate

git branch -d GitNewBranch

git push -u origin main

```



\## Expected Output



\- A new branch named `GitNewBranch` is created.

\- Changes are committed successfully.

\- The branch is merged into the `main` branch.

\- Git history displays the merge.

\- The branch is deleted after merging.



\## Result



The branching and merging operations were completed successfully. The changes made in the branch were merged into the main branch, and the branch was deleted after verification.

