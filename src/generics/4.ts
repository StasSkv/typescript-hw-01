type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser<U extends Partial<User>>(initialValues: U) {
  // Оновлення користувача
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
