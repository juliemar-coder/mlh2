import sel from '../../data/selectors';
import exp from '../..data/expected.json';
import * as url from "url";

describe('Required fields and story created', function () {

    before('Open App', function () {
        browser.url('');
    });

    it('TC-026 Submit button is enabled after fields 1-4 are filled in with valid values',  function () {
        $(sel.name).setValue(value:'LadyBug007');
        $$(sel.radioButtons)[1].click();
        $(sel.age).setValue(value:'1234567890');
        $(sel.storyType).click();
        $$(sel.storyList)[6].click();
        let submitBtn = $(sel.submit).isEnabled();
        expect(submitBtn).toEqual(exp.true);
    });
    it('TC-027 User can create a story with valid values',  function () {
        browser.refresh();

        $(sel.name).setValue(value: 'LadyBug007');
        $$(sel.radioButtons()[1].click();
        $(sel.age).setValue('1234567890');
        $(sel.storyType).click();
        $$(sel.storyList)[6].click();
        $(sel.submit).click();

        let tryAgainBtn = $(sel.tryAgain).isDisplayed();
        expect(tryAgainBtn).toEqual(expected:true);
    });

});