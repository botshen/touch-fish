import './style.css';

const xxxx = () => {
  // 删除所有的<video>标签
  document.querySelectorAll('video').forEach((video) => {
    video.remove();
  });
  // 删除所有的<svg>标签
  document.querySelectorAll('svg').forEach((svg) => {
    svg.remove();
  });
  // 删除所有的<img>标签
  document.querySelectorAll('picture').forEach((img) => {
    img.remove();
  });
  // 删除以Frame_top_2ybWw开头的class
  document.querySelectorAll(`[class^="Frame_top_"]`).forEach((frame) => {
    frame.remove();
  });
  // 删除以SecBar_secBar_开头的class
  document.querySelectorAll(`[class^="SecBar_secBar_"]`).forEach((secBar) => {
    secBar.remove();
  });
  // 删除以SecBar_visable_开头的class
  document.querySelectorAll(`[class^="SecBar_visable_"]`).forEach((visable) => {
    visable.remove();
  });
  // class="Frame_side_3G0Bf grayTheme" 删除这个div
  document.querySelectorAll(`[class^="Frame_side_"]`).forEach((side) => {
    side.remove();
  });

  // Main_side_
  document.querySelectorAll(`[class^="Main_side_"]`).forEach((side) => {
    side.remove();
  });
  // class="picture picture-box_row_30Iwo"
  document.querySelectorAll('.picture[class*="picture-box_row_"]').forEach((side) => {
    side.remove();
  });
  // card-video_videoBox_
  document.querySelectorAll(`[class^="card-video_videoBox_"]`).forEach((side) => {
    side.remove();
  });
  // woo-picture-main
  document.querySelectorAll('.woo-picture-main').forEach((side) => {
    side.remove();
  });
  // woo-button-main
  document.querySelectorAll('.woo-button-main').forEach((side) => {
    side.remove();
  });
}


export default defineContentScript({
  matches: ['*://*.weibo.com/*'],
  cssInjectionMode: 'ui',
  async main(ctx) {
    console.log('222', 222)
    // 创建 MutationObserver 实例
    const observer = new MutationObserver((mutations) => {
      xxxx();
    });

    // 配置 observer
    const config = {
      childList: true,  // 监听子节点的增删
      subtree: true     // 监听所有后代节点
    };

    // 开始观察 document.body
    observer.observe(document.body, config);

    // 3. Define your UI
    const ui = await createShadowRootUi(ctx, {
      name: 'example-ui',
      position: 'overlay',
      anchor: 'html',
      onMount(container) {
        const button = document.createElement('button');
        button.textContent = 'Hello world!';
        button.classList.add('floating-button');
        container.append(button);
        button.addEventListener('click', () => {
          xxxx()
        });
      },
    });

    // 4. Mount the UI
    ui.mount();
  },
});
