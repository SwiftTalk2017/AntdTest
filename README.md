# Antd react native test project

This project demonstrate a antd's bug about `InputItem` when using it in react native. The code below won't disable the `InputItem` like it shuold be:

```JSX
   <List>
     <InputItem
       disable
       placeholder={"this is disable"}
     >
       Disable:
    </InputItem>
   </List>
```
