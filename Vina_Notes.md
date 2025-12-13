## chapter4 Installing the payload

 1st command bunx create-payload-app@3.33.0 --use-bun
 then mopve all the folder ./src/app to .src/app/(app) - follow the instructions

 after that 
 rerun thecommand bunx create-payload-app@3.33.0 --use-bun

 after that it will ask the connect tothe mongodb , then 
 add the url 
 oyouhavetochnage user , userpass and the dbname in the end 

 inthe collection we have to make the schema forthe new table, 
 payload.config.ts import the new library and add to collections list 
 