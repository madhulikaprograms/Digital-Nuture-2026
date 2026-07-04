# Git Hands-on Lab – Exercise 2 (.gitignore)

## Module
Module 11 – Git - ex 2


## Objective
The objective of this exercise is to understand how Git ignores unwanted files and folders using the `.gitignore` file.

## Description
In this exercise, a local Git repository was created and configured. A `.gitignore` file was added to ignore log files (`*.log`) and the `log` directory. The repository status was verified to ensure that ignored files were not tracked by Git. Finally, the changes were committed and pushed to the remote GitHub repository.

## Files Included
- README.md
- .gitignore

## .gitignore Content

```text
*.log
log/
```

## Git Commands Used

```bash
git init
touch error.log
mkdir log
touch log/sample.txt
touch .gitignore
git status
git add .gitignore
git commit -m "Added .gitignore file"
git push -u origin main
```

## Expected Output
- All `.log` files are ignored.
- The `log` folder is ignored.
- Only the required project files are tracked by Git.
- The repository is successfully pushed to GitHub.

## Result
The `.gitignore` file was successfully implemented. Git ignored all unwanted log files and folders, and the repository was committed and pushed to GitHub successfully.