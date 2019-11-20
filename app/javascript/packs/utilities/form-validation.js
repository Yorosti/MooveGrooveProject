class FormValidation {
    constructor() {
        this.errors = []
    }
    completeCheck() {
        this.checkDates()
        this.checkNumbers()
        this.checkEmails()
        this.checkPasswords()
        this.checkTexts()
    }

    checkDates() {
        let el = this.querySelectThisInput('date')
        if (el && el.value > new Date()) {
            this.errors.push('Cannot choose a date in the future')
        } else if (el && el.value === '') {
            this.errors.push('Please insert a date')
        }

    }
    checkNumbers() {
        let el = this.querySelectThisInput('number')
        if (el && el.value <= 0) {
            this.errors.push('Number is not correct')
        }
    }
    checkEmails() {
        let el = this.querySelectThisInput('email')
        // let emailReg = new RegExp("^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)")
        if (el && el.value === '') {
            this.errors.push('Please insert an email')
        }//else if(!emailReg.test(el.value)){
            //this.errors.push('Please insert a valid email')
        //}
    }
    checkPasswords() {
        let el = this.querySelectThisInput('password')
        let passReg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
        if (el && el.value === '') {
            this.errors.push('Please insert a password')
        }else if(!passReg.test(el.value)){
            this.errors.push('Password must be at least 8 characters')
            this.errors.push('Password must contain an uppercase letter')
            this.errors.push('Password must contain a number')
        }
    }
    checkTexts() {
        let el = this.querySelectThisInput('text')
        if (el && el.value === '') {
            this.errors.push('Please insert all fields')
        }
    }

    checkSpecific(elmntObj) {
        Object.keys(elmntObj).forEach(element => {
            document.querySelectorAll(element).forEach(el => {
                console.log(el.value)
                if (!this.isNumeric(el.value) && el.value === '') {
                    this.errors.push(elmntObj[element])

                } else if (this.isNumeric(el.value) && el.value <= 0) {
                    this.errors.push(elmntObj[element])
                }
            })
        })
    }


    showErrors() {
        let errList;
        let item;

        this.errors.forEach(elmnt => {
            item = document.createElement('li')
            errList = document.querySelector('#errors-tootip ul')
            item.appendChild(document.createTextNode(elmnt))
            errList.appendChild(item)
        })
        errList.parentElement.classList.add('err-show')
        setTimeout(() => {
            errList.parentElement.classList.remove('err-show')
            setTimeout(() => {
                while (errList.firstChild) {
                    errList.firstChild.remove()
                }
            }, 1100)
        }, 5000)
    }


    querySelectThisInput(type) {
        return document.querySelector('input[type="' + type + '"')
    }

    isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
     }
}
window.FormValidation = FormValidation