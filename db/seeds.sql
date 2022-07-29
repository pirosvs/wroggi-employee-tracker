INSERT INTO department (dept_name)
VALUES
    ("Administration"),
    ("Tech"),
    ("Accounting"),
    ("Customer Service");

INSERT INTO employee_role (title, salary, dept_id)
VALUES
    ("Customer Outreach", 40000, 4),
    ("Accountant", 55000, 3),
    ("Tech Support", 55000, 2),
    ("Controller", 70000, 1),
    ("Receptionist", 40000,  4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
    (134, "Rosy", "Miller", 3, null),
    (652, "Micah", "Dupont", 5, 778),
    (778, "Evren", "Point", 1, null),
    (902, "Winnie", "Box", 2, null),
    (846, "Ivy", "Rhodes", 4, null),
    (721, "Rae", "Cena", 3, 846);