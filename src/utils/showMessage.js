import getComponentRootDom from "@/utils/getComponentRootDom";
import Icon from "@/components/Icon";
import styles from "./showMessage.module.less";
/**
 * 弹出消息
 * @author HuangBingQuan
 * @param { String } content 消息内容
 * @param { String } type 消息类型 info error success warn
 * @param { Number } duration 多久后消失
 * @param { HTMLElement } container 容器，消息会显示到该容器的正中，如果不传，则现实到页面正中
 */
export default function (content, type= "info", duration = 2000, container, callback) {
  const div = document.createElement('div');
  const iconDom = getComponentRootDom(Icon, {
    type,
  });
  div.className = `${styles.message} ${styles['message-' + type ]}`;
  div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`;
  container = container || document.body;
  getComputedStyle(container).position === "static" && (container.style.position = 'relative');
  //异步渲染
  container.appendChild(div);
  // 强行渲染
  container.clientHeight;

  div.style.opacity = 1;
  div.style.transform = `translate(-50%, -50%)`;

  setTimeout(()=> {
    div.style.opacity = 0;
    div.style.transform = `translate(-50%, -50%) translateY(-15px)`;
    div.addEventListener('transitionend', ()=> {
      div.remove();
      callback && callback();
    }, { once: true })
  }, duration)
}