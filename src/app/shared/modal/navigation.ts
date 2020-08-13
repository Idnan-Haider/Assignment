
export interface NavLinkItem {
    displayName: string;
    route?: string;
    iconName?: string;
    level: '1st' | '2nd' | '3rd';
    children?: NavLinkItem[];
}

export const menu: NavLinkItem[] = [
    {
        displayName: 'Dashboard',
        route: '/dashboard',
        iconName: 'dashboard',
        level: '1st'
    },
    {
        displayName: 'Category',
        level: '2nd',
        children: [
            {
                level: '1st',
                displayName: 'Products ',
                iconName: 'list'
            }
        ]
    },
    {
        displayName: 'Company',
        level: '3rd',
        children: [
            {
                displayName: 'Department',
                level: '2nd',
                children: [
                    {
                        level: '1st',
                        displayName: 'Users',
                        iconName: 'group',
                        route: '/users'
                    },
                    {
                        level: '1st',
                        displayName: 'Employee',
                        route: '/employee',
                        iconName: 'group'
                    }
                ]
            }
        ]
    }
];
