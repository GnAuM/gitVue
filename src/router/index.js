import { createWebHistory, createRouter } from "vue-router";
import Main from "@/components/Main.vue";
import Create from "@/components/CreateComponent.vue";
import Edit from "@/components/EditComponent.vue";
import List from "@/components/ListComponent.vue";
import Book from "@/components/BookComponent.vue";
import Test from "@/components/Test.vue";
import TextChange from "@/components/TextTypingCarousel.vue";

const routes = [
  {
    path: "/1",
    name: "main",
    component: Main,
  },
  {
    path: "/",
    name: "create",
    component: Create,
  },
  {
    path: "/Edit/:id",
    name: "edit",
    component: Edit,
  },
  {
    path: "/List",
    name: "list",
    component: List,
  },
  {
    path: "/ListBook",
    name: "book",
    component: Book,
  },
  {
    path: "/test",
    name: "test",
    component: Test,
  },
  {
    path: "/TextChange",
    name: "textChange",
    component: TextChange,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;