INSERT INTO department (id, dept_name)
VALUES
    ( 001, "Administration"),
    ( 002, "Tech"),
    ( 003, "Accounting"),
    ( 004, "Customer Service");

INSERT INTO employee_role (id, title, salary, dept_id)
VALUES
    ( 1, "Customer Outreach", 40000, 004),
    ( 2, "Accountant", 55000, 003),
    ( 3, "Tech Support", 55000, 002),
    ( 4, "Controller", 70000, 001),
    ( 5, "Receptionist", 40000, 004);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
    (134, "Rosy", "Miller", 3),
    (652, "Micah", "Dupont", 5, 778),
    (778, "Evren", "Point", 1),
    (902, "Winnie", "Box", 2),
    (846, "Ivy", "Rhodes", 4),
    (721, "Rae", "Cena", 3, 846);