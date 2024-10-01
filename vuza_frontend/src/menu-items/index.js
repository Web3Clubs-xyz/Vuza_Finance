import borrower from './borrower';
import administrator from './administrator';
import lender from './lender';

// Retrieve user object from localStorage
const user = JSON.parse(localStorage.getItem('user'));
const organizationTypeId = user ? user.organization_type_id : null;

// Determine the menu items based on organization_type_id
let menuItems;


if (organizationTypeId === '1') {
    menuItems = {
        items: [administrator]
    };
} else if (organizationTypeId === '2') {
    menuItems = {
        items: [borrower]
    };
} else {
    menuItems = {
        items: [lender]
    };
}

export default menuItems;
