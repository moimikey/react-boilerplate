# Font Awesome
[Examples](http://fontawesome.io/examples/)

## Usage
Font Awesome should be used in the form of explicit `span` tags:

```html
<span className="fa fa-camera-retro" />
```

## Helper Classes
Helper classes can be additionally appended for special cases. Font Awesome classes **should
not** be overridden. A helper class may already exist:

### Size
```html
<span className="fa fa-camera-retro fa-lg" />
<span className="fa fa-camera-retro fa-2x" />
<span className="fa fa-camera-retro fa-3x" />
<span className="fa fa-camera-retro fa-4x" />
<span className="fa fa-camera-retro fa-5x" />
```

### Fixed Width
```html
<span className="fa fa-camera-retro fa-fw" />
```

### Lists & Bullets
```html
<!-- note: `fa-li` preceding `fa` -->
<span className="fa-li fa fa-check-square" /> <!-- unchecked -->
<span className="fa-li fa fa-check-check-square" /> <!-- checked -->
```

### Animation
```html
<span className="fa fa-spinner fa-spin" />
<span className="fa fa-spinner fa-pulse" />
```

### Rotation
```html
<span className="fa fa-shield fa-rotate-90" />
<span className="fa fa-shield fa-rotate-180" />
<span className="fa fa-shield fa-rotate-270" />
```

### Flip
```html
<span className="fa fa-shield fa-flip-horizontal" />
<span className="fa fa-shield fa-flip-vertical" />
```

### Stacking
```html
<!-- stacking -->
<span class="fa-stack fa-lg">
  <span class="fa fa-camera fa-stack-1x" />
  <span class="fa fa-ban fa-stack-2x text-danger" />
</span>
```
