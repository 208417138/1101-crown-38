# 1.First one

![](https://i.imgur.com/mjjPdek.png)

- **index.ejs**

```
<body>
  <h1>
    <%= title %>
  </h1>
  <p>Welcome to
    <%= title %>
  </p>
  <h3>My name is
    <%= name %>
  </h3>
  <h3>My student id is
    <%= id %>
  </h3>
</body>
```

- **index.js**

```
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', name: '4LL3N', id: '208417138' });
});
```

---

# 2.Crown_38

![](https://i.imgur.com/UMZRRJU.jpg)

- **crown_38.js router set**

```
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('crown_38', { title: 'Express', name: '4LL3N', id: '208417138' });
});

module.exports = router;

```

- **app.js router set**

```
const crown_38_Router = require('./routes/crown_38');

app.use('/crown_38', crown_38_Router);

```

---

# 3.postgres create

![](https://i.imgur.com/5g4me5C.png)

---

# 4.postgres backup

![](https://i.imgur.com/FaM7mNg.png)

---

# 5.database.js

![](https://i.imgur.com/CweJGYH.png)

- **database.js**

```
const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'crown_38',
  password: '0000',
  port: '5432',
})
pool.query('SELECT * from category_38', (err, res) => {
  console.log(JSON.stringify(res.rows));
  pool.end();
})

module.exports = pool ;
```

---
