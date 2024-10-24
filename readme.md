<!--- STEPS FOR SEQUELIZE-CLI  -->

**step 1:**
npx sequelize-cli init

After the creation of the config.json and migration folder, you can create a new migration file by running the following command:

**step 2**
npx sequelize-cli model:generate --name "nameoftable" --attributes "nameofcolumn1:datatype1,nameofcolumn2:datatype2", e.g:
npx sequelize-cli model:generate --name Question --attributes content:string,quizId:integer

**step 3**
//create the database
npx sequelize-cli db:create

**step 4**
//migrate the database
npx sequelize-cli db:migrate

**step 5(a)**
//create a seed file
npx sequelize-cli seed:generate --name "nameoftable"

**step 5(b)**
//run the seed file
npx sequelize-cli db:seed:all

**Step 5(c)**

<!-- undo a seed file -->

npx sequelize-cli db:seed:undo:all

**step 6**
//drop the database
npx sequelize-cli db:drop

**step 7**
//migrate:undo
npx sequelize-cli db:migrate:undo

**step 8**
