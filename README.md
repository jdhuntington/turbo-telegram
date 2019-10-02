# Building components

Reusable component libraries should be adapting to the application design system. For examples, rendering the same components on Netflix should look like the Netflix design system, while

There are two types of components to consider when defining components:

**Atomic components**: represents a single primitive coupled with styling.

**Composed components**: composes together a template using specific slots with state management. Composed components can be recomposed via code, or even theme. Has no knowledge of styling; let that be an atomic component concept.

## Atomic?

There are many ways to build atomic components. The simplest example might look like this:

```
const Button = props => <button {...props} />;
```

Libraries such as `styled-components`, `emotion`, and `jss-react` have helpers usually called `styled`, which allow the caller to marry together styling with a primitive:

```tsx
const Foo = styled("button")`
  background-color: ${p => p.tokens.foo};
  :hover {
    background-color: green;
  }
`;
```

Atomic components pick up the theme through react context.

Using this syntax lets you build UX prototypes quickly because you don't need to go back and forth between css and js files; you produce components and render a heirarchy.

You can use the same concept with raw css; no need to make a hard dependency on css-in-js:

```tsx
const root = styled("div")(p => ["ms-Foo", p.primary && "ms-Foo--primary"]);
```

See a more thorough example in the `css` folder.

## Composed?

Composed components pull together slots, view, and state and give them a name.

Example:

```tsx
const SpinButton = composed({
  // The name used to theme the component
  name: "SpinButton",

  // The slot types which can be redefined in theme
  slots: {
    root: "div", // or any atomic component
    input: "input"
    // etc.
  },

  // The view template, defining the order of elements
  view: ({ Slots, props }) => (
    <Slots.root {...props.root}>
      <Slots.input {...props.input} />
      {/* etc. */}
    </Slots.root>
  ),

  // The state hook, converting user props into slot props.
  state: userProps => {
    return {
      root: {
        /* props for root */
      },
      input: {
        /* props for input */
      }
      // etc.
    };
  },

  defaultProps: {
    /* etc. */
  }
});
```

Components can be recomposed without adding React wrappers!

```tsx
const NewSpinButton = composed(SpinButton, {
  slots: {
    root: styled(SpinButton.root)`
      background-color: red;
    `
  }
});
```

Their definitions can also be overidden through theme by default:

```tsx
const theme = {
  components: {
    SpinButton: {
      slots: {
        root: styled.div`
          background-color: orange;
        `
      }
    }
  }
};
```

Composed components allow the user to provide slot props automatically:

```tsx
render() {
  return <SpinButton increment={{ 'data-automation-id': 'spin1-increment' }} />
}
```

### State!

The state of a composed component takes user props and returns slot props. With React hooks, you can mix in exactly the right callbacks and effects to provide a reusable finite state machines.

```tsx
const useSpinButtonState = userProps => {
  const;
  return;
};
```

### View!

A view template can't be much simpler: it is a function which takes the slots and the props for each slots and mixes them together:

```tsx
const view = ({ Slots, slotProps, userProps }) => (
  <Slots.root {...slotProps.root}>
    <div>
      {" "}
      {/* not everything must be a slot in the template */}
      <Slots.input {...slotProps.input} />
    </div>
  </Slots.root>
);
```

### Why `composed` and not just... use React?

The composed helper gives you a lot of things:

- Recomposition support
- Themeable definition
- Automated props processing for slots

Consider that the SpinButton could be defined without `composed`:

```tsx
const SpinButton = userProps => {
  const slotProps = useSpinButtonState(userProps);

  return (
    <Root {...userProps.root} {...slotProps.root}>
      <Input {...slotProps.input} />
      <Increment {...slotProps.increment} />
      <Decrement {...slotProps.decrement} />
    </Root>
  );
};
```

You could certainly recompose this, but you'd be forced to redefine the view template. It would not be overridable through the theme. You would need to do extra work to get `userProps[slotName]` to be mixed into the individual slots.

With `composed`, you can redefine whatever you want a SpinButton to look like completely separate from the component. That can not only include styling, but restructuring the view templates, tweaking the state management... all possible through theme.

## Theming

Theming is more than just css styling; different design systems can require render more/less content for specific patterns, which can also mean that there is additional state/props management to consider. If this can be injected into the composed components, you can address a wide variety of customization scenarios.

# API reference

## `composed([baseComponent], options)`

Composes a composite component.

## Composed options

### `name`

### `slots`

### `state`

### `view`

### `defaultProps`
