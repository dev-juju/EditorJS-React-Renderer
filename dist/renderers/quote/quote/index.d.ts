/** Quote Component
  *
  * Component to display Quote messages to client
  *
  * @version 1.0.0
  * @created - 2019.08.20
  * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@gmail.com> (https://bomdisoft.com)
  *
  * Version History
  * ---------------
  * @version 1.0.1 - 2020.07.17 - Add config parameter - Adombang Munang Mbomndih
  * @version 1.1.0 - 2021.04.11 - Add classNames parameter - Adombang Munang Mbomndih
  */
declare const Quote: ({ author, message, config, classNames, style: { container, content, message: messageStyle, author: authorStyle } }: {
    author?: string;
    message: any;
    config: any;
    classNames: any;
    style: {
        container: any;
        content: any;
        message: any;
        author: any;
    };
}) => any;
export default Quote;
