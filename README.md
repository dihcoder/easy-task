# 🧾 EasyTask

> 📘 Este README também está disponível em [Português 🇧🇷](./README.pt-br.md)

**EasyTask** is a task management app built with Angular that lets you view, add, complete, and delete tasks by user. Created as part of the course *Angular - The Complete Guide (2025 Edition)*, this project applies modern Angular features like `signals`, reactive services, and `content projection`.

> 🌐 Live demo available at: [https://dihcoder.github.io/easy-task](https://dihcoder.github.io/easy-task)

<br/>

![EasyTask Preview](./task-management-app.png)

---

## ✨ Features

* Switch between users with separate task lists  
* Add new tasks  
* Mark tasks as completed  
* Delete tasks  
* Persistent storage with **localStorage**

---

## 🧠 Angular Concepts Used

* `@Input()` and `@Output()` with `signals`  
* `ng-content` for content projection  
* Reactive state with `signal` and `computed`  
* Component communication  
* Shared services with `@Injectable()`  
* Modular, reusable componentization  
* Feature-based folder structure  
* Pipes (`date`)

---

## 🛠️ Technologies

* [Angular](https://angular.io/) v19.1  
* TypeScript  
* HTML/CSS  
* TailwindCSS (partial and progressive use)  
* localStorage (Web Storage API)

---

## 📁 Folder Structure

```bash
src/
├── app/
│   ├── core/
│   │   └── services/
│   │       ├── task.service.ts
│   │       └── user.service.ts
│   ├── features/
│   │   ├── tasks/
│   │   │   ├── add-task/         # Task form
│   │   │   ├── task/             # Single task component + task.model.ts
│   │   │   ├── tasks.component.*
│   │   └── user-list/
│   │       ├── user/             # Single user component + user.model.ts
│   │       ├── user-list.component.*
│   └── shared/
│       ├── card/                # Reusable layout component
│       └── header/              # App header
├── assets/
│   ├── users/                   # User images
│   └── task-management-logo.png
````

> The structure follows the **Core + Features + Shared** pattern, promoting scalability and modular organization.

---

## 🎨 Styling

* Base styling is written in **pure CSS**.
* TailwindCSS is included for future utility-first adoption.
* Responsive and modern design with reusable components.

---

## ▶️ How to Run Locally

```bash
# Clone the repository
git clone https://github.com/dihcoder/easy-task.git
cd easy-task

# Install dependencies
npm install

# Run the development server
ng serve
```

Access at: [http://localhost:4200](http://localhost:4200)

---

## 📚 Project Goal

This project was developed for educational purposes, as part of the Angular course on [Udemy](https://www.udemy.com/) taught by [Maximilian Schwarzmüller](https://www.udemy.com/course/the-complete-guide-to-angular-2/). Its goal is to consolidate modern Angular architecture, best practices, and up-to-date framework features.

---

## 🧑‍💻 Author

**Diego Silva**
Tech enthusiast passionate about development and design.
[GitHub: @dihcoder](https://github.com/dihcoder)