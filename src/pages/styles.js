import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin-top: 25px;
    font-size: 21px;
    text-align: center;

    -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 2s; /* Firefox < 16 */
    -ms-animation: fadein 2s; /* Internet Explorer */
    -o-animation: fadein 2s; /* Opera < 12.1 */
    animation: fadein 2s;

    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    /* Firefox < 16 */
    @-moz-keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    /* Safari, Chrome and Opera > 12.1 */
    @-webkit-keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    /* Internet Explorer */
    @-ms-keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    /* Opera < 12.1 */
    @-o-keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    #header {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        width: 100%;
    }
`;

export const Card = styled.div`
    width: 70px;
    height: 70px;
    border: 1px solid #274674;
    margin: 10px;
    cursor: pointer;
    border-radius: 20px;
    overflow: hidden;
`;

export const Game = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;

    flex-wrap: wrap;
    width: 1000px;
    height: 500px;
`;
