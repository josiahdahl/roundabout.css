# roundabout.css
A pure CSS3 carousel, built with SCSS.

[DEMO](http://codepen.io/jodahl/pen/yOdLza)

A simple, multi-item carousel built with SCSS. It's my first attempt at something like this, I appreciate feedback.

##Usage

HTML:

```html
<div class="your-class">
    <div class="roundabout-slides">
        <div class="roundabout-slide">
            your content
        </div>
        <div class="roundabout-slide">
            your content
        </div>
    </div>
</div>

```

Mixin:

```scss
@include roundabout($items: 10,           // Required
                    $viewportWidth: 600,  // Required, in px
                    $viewportHeight: 250, // Required, in px
                    $slideWidth: 600,     // Required, in px
                    $transitionTime: 1,   // Default value (seconds)
                    $visibleTime: 3,      // Default value (seconds)
                    $slideMargin: 0);     // Default value Left and right margin (px)
```


##Todo
* Enable centering of slides (Show multiple slides at once)


##Changelog
V1.1 First Public Release