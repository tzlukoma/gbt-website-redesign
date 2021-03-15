import React from 'react'

export default function typography() {
    return <div>
        <h1>CSS Basic Elements</h1>
         
        <p>The purpose of this HTML is to help determine what default settings are with CSS and to make sure that all possible HTML Elements are included in this HTML so as to not miss any possible Elements when designing a site.</p>
         
        <hr />
         
        <h1 id="headings">Headings</h1>
         
        <h1> The quick brown fox jumps over the lazy dog</h1>
        <h2> h2 The quick brown fox jumps over the lazy dog</h2>
        <h3> h3 The quick brown fox jumps over the lazy dog</h3>
        <h4>The quick brown fox jumps over the lazy dog</h4>
        <h5>The quick brown fox jumps over the lazy dog</h5>
        <h6>The quick brown fox jumps over the lazy dog</h6>
         
        <small><a href="#wrapper">[top]</a></small>
        <hr />
         
         
        <h1 id="paragraph">Paragraph</h1>
         
        <img style={{float:"right"}} src="http://placehold.it/250x125" alt="CSS | God's Language" />
        <p>Lorem ipsum dolor sit amet, <a href="#" title="test link">test link</a> adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.</p>
         
        <p>Lorem ipsum dolor sit amet, <em>emphasis</em> consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.</p>
         
        <small><a href="#wrapper">[top]</a></small>
        <hr />
         
        <h1 id="list_types">List Types</h1>
         
        <h3>Definition List</h3>
        <dl>
            <dt>Definition List Title</dt>
            <dd>This is a definition list division.</dd>
        </dl>
         
        <h3>Ordered List</h3>
        <ol>
            <li>List Item 1</li>
            <li>List Item 2</li>
            <li>List Item 3</li>
        </ol>
         
        <h3>Unordered List</h3>
        <ul>
            <li>List Item 1</li>
            <li>List Item 2</li>
            <li>List Item 3</li>
        </ul>
         
        <small><a href="#wrapper">[top]</a></small>
        <hr />
         
        <h1 id="form_elements">Fieldsets, Legends, and Form Elements</h1>
         
        <fieldset>
            <legend>Legend</legend>
         
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus.</p>
         
            <form>
                <h2>Form Element</h2>
         
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui.</p>
         
                <p><label htmlFor="text_field">Text Field:</label><br />
                <input type="text" id="text_field" /></p>
         
                <p><label htmlFor="text_area">Text Area:</label><br />
                <textarea id="text_area"></textarea></p>
         
                <p><label htmlFor="select_element">Select Element:</label><br />
                    <select name="select_element">
                    <optgroup label="Option Group 1">
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </optgroup>
                    <optgroup label="Option Group 2">
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </optgroup>
                </select></p>
         
                <p><label htmlFor="radio_buttons">Radio Buttons:</label><br />
                    <input type="radio" className="radio" name="radio_button" value="radio_1" /> Radio 1<br/>
                        <input type="radio" className="radio" name="radio_button" value="radio_2" /> Radio 2<br/>
                        <input type="radio" className="radio" name="radio_button" value="radio_3" /> Radio 3<br/>
                </p>
         
                <p><label htmlFor="checkboxes">Checkboxes:</label><br />
                    <input type="checkbox" className="checkbox" name="checkboxes" value="check_1" /> Radio 1<br/>
                        <input type="checkbox" className="checkbox" name="checkboxes" value="check_2" /> Radio 2<br/>
                        <input type="checkbox" className="checkbox" name="checkboxes" value="check_3" /> Radio 3<br/>
                </p>
         
                <p><label htmlFor="password">Password:</label><br />
                    <input type="password" className="password" name="password" />
                </p>
         
                <p><label htmlFor="file">File Input:</label><br />
                    <input type="file" className="file" name="file" />
                </p>
         
         
                <p><input className="button" type="reset" value="Clear" /> <input className="button" type="submit" value="Submit" />
                </p>
         
         
         
            </form>
         
        </fieldset>
         
        <small><a href="#wrapper">[top]</a></small>
        <hr />
         
        <h1 id="tables">Tables</h1>
         

         
        <small><a href="#wrapper">[top]</a></small>
        <hr />
         
        <h1 id="misc">Misc Stuff - abbr, acronym, pre, code, sub, sup, etc.</h1>
         
        <p>Lorem <sup>superscript</sup> dolor <sub>subscript</sub> amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. <cite>cite</cite>. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. <acronym title="National Basketball Association">NBA</acronym> Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.  <abbr title="Avenue">AVE</abbr></p>
         
        <pre><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. <acronym title="National Basketball Association">NBA</acronym> Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.  <abbr title="Avenue">AVE</abbr></p></pre>
         
        <blockquote>
            "This stylesheet is going to help so freaking much." <cite>Blockquote</cite>
        </blockquote>
    </div>
}
