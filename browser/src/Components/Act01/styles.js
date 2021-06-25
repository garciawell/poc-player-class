import styled from 'styled-components';

export const List = styled.div`
`;

export const Wrapper = styled.div`
    margin: 0 25px;
    margin-top: 25px;
    h2 {
        margin-bottom: 50px;
    }


    .isCorrent {
        background: green;
        color:#fff;
        border-radius: 3px;
        .MuiRadio-colorSecondary.Mui-checked {
            color:#fff;
        }
    }    
    
    .isWrong {
        background: red;
        color:#fff;
        border-radius: 3px;
        .MuiRadio-colorSecondary.Mui-checked {
            color:#fff;
        }
    }    

    .card{
        padding: 25px;
    }
`;

export const Obs = styled.div`
    color: green;
    font-size: 14px;
    margin-top: 15px;
`;
