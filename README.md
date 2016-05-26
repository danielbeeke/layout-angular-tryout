# Rivets layout example

This repo is an example how you can use Angular to have a layout that is maintainable.

## Abstract idea: Layouts are a lot like faces.

For this example I have used the abstract idea that layouts/UI's are a bit like a face.
A face has 'presets': smiling, lauching, crying, thinking, eating.
These presets are a combination of tension on muscles in the face. So for laughing you maybe need 20 specific muscles,
 for thinking maybe 10 different one. 
 
## Back to Angular 

State of a layout is like the face. Inside the example state is a javascript object.

```
layout: {
    sidebar: {
        collapsed: false
    },
    panel: {
        left: {
            name: 'left',
            expanded: true,
            collapsed: false
        },
        right: {
            name: 'right',
            expanded: false,
            collapsed: true
        }
    }
}
```

Angular monitors this object, so when a value changes Angular re-renders the template.
Awesome!