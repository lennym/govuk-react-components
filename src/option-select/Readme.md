### Usage
#### Server Side rendering
* No expand/collapse
```jsx 
<form action="/search" method="GET">
  <OptionSelect title="Organisations">
     <CheckedOption id="1" name="orgs" value="1">1</CheckedOption>
     <CheckedOption id="2" name="orgs" value="2">2</CheckedOption>
     <CheckedOption id="3" name="orgs" value="3">3</CheckedOption>
  </OptionSelect>
  <Button type="submit">Submit Filters</Button>
</form>
```

#### Client Side rendering
* Expansion / Collapsing will be done by the component.
* You are responsible for managing the state of the options.

Probably end up looking something like this: 
```jsx 
state = {
  noSelected: 0,
  options: [
     { val: 1, checked: true, description: '1' },
     { val: 2, checked: false, description: '2' },
  ]
}

onOptionSelect (selected) {
  //  Use function as you rely on historic state
  this.setState((prev) => {
    const newState = prev.options.map((opt) => {
      if(opt.val === selected.val) {
        opt.checked = !opt.checked;
      }
      return opt;
    });
    const noSelected = selected.checked ? prev.noSelected + 1 : prev.noSelected - 1;
    return { options: newState, noSelected }
  }); 
}

render() {
  <OptionSelect title="Organisations" description={`${noSelected} selected`} >
     { 
     options.map((opt) => (
       <CheckedOption name="orgs" value={opt.val} checked={opt.checked} onClick={this.onOptionSelect.bind(this, opt)}>{opt.description}</CheckedOption>     
     ))
     }
  </OptionSelect>
}
```
