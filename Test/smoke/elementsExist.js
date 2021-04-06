describe('My Little Hero', function () { //define suite title by passing a string

    describe('Getting to the page', function () { //define sub-suite title by passing a string

        before ('Open App', function () {
            browser.url ( ''); //open baseUrl
        });


        it('TC-001 Title is MLH trial', function () { //define test title by passing a string
            let title = browser.getTitle(); //get page title and assign it to the "title" variable
            browser.pause(2000); //just pause to visually see that something is happening on the page
            expect(title).toEqual('MLH trial'); //compare {title} (actual) and "MLH trial" (expected)
        });

    });

describe('Elements exist', function () { //define sub-suite title by passing a string

    it('TC-002 Header is present', function () {
        let header = $('h3').isDisplayed();
        expect(header).toEqual(true);
    });

    it('TC-003 Instruction is present ', function () {
        let instruction = $('p').isDisplayed();
        expect(instruction).toEqual(true);
    });

    it('TC-004 Name field label is present ', function () {
        let label = $$('.ant-form-item-required')[0].isDisplayed();
        expect(label).toEqual(true);
    });

    it('TC-005 Name field label is present', function () {
        let label = $$('.ant-form-item-required')[0].isDisplayed();
        expect(label).toEqual(true);

    });

    it('TC-006 Gender radio buttons label is present', function () {
        let label = $$(sel.requiredLabel)[1].isDisplayed();
        expect(label).toEqual(true);

    });

    it('TC-007 Gender radio buttons 1 is present', function () {
        let buttonHe = $$(sel.radioButtons)[0].isDisplayed();
        expect(buttonHe).toEqual(true);

    });
    it('TC-010 Type of story label = "4. What type of story would you like to read?"', function () {
        let label = $$(sel.requiredLabel)[3].isDisplayed();
        expect(label).toEqual(true);
    });
    it('TC-011 Story type dropdown is present', function () {
        let dropdown = $(sel.storyType).isDisplayed();
        expect(dropdown).toEqual(true);
    });
    it('TC-012 Image field label is present', function () {
        let label = $(sel.imageLabel)[4].isDisplayed();
        expect(label).toEqual(true);
    });

    it('TC-013 Image field is present', function () {
        let imageFlied = $(sel.imageField).isDisplayed();
        expect(imageField).toEqual(true);
    });
    it('TC-014 Submit button is present', function () {
        let submit = $(sel.submit).isDisplayed();
        expect(submit).toEqual(true);
    });

});