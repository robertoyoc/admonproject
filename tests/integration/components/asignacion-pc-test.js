import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('asignacion-pc', 'Integration | Component | asignacion pc', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{asignacion-pc}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#asignacion-pc}}
      template block text
    {{/asignacion-pc}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
