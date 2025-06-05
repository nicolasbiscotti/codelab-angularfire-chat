You can **rollback** to the previous commit (`fac6be4babf2c85e1bcfd50a6fcf958a2cd054d5`) using one of the following methods:

### **Option 1: Reset to Previous Commit (Hard Reset)**

This **removes** the latest commit and updates your working directory:

```bash
git reset --hard fac6be4babf2c85e1bcfd50a6fcf958a2cd054d5
```

⚠️ **Warning:** This will discard all changes from the last commit (`reverse messages`). Use it only if you **don't need** those changes.

---

### **Option 2: Create a New Commit That Undoes Changes (Safer Approach)**

If you prefer keeping the history intact, use **revert** instead:

```bash
git revert b1bf45a7c4560caf574ddaa54cded5b5fafc2dec
```

This creates a **new commit** that undoes the changes from the `reverse messages` commit.

---

### **Option 3: Checkout Previous Commit Without Deleting History**

If you just want to **temporarily switch** to the previous state:

```bash
git checkout fac6be4babf2c85e1bcfd50a6fcf958a2cd054d5
```

You will be in a **detached HEAD state**, meaning you can test things out without affecting the `main` branch.

---

### **Next Steps**

- If you used **reset**, push the changes with:
  ```bash
  git push --force
  ```
- If you used **revert**, simply push:
  ```bash
  git push origin main
  ```
